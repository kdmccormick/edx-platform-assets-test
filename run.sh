#!/usr/bin/env bash

set -eou pipefail
set -x

output_id="$1"
output="./output_$output_id"
rm -rf "$output"
mkdir "$output"

test_paths=(
	"/openedx/staticfiles"
	"/openedx/themes"
	"/openedx/edx-platform/common/static/bundles"
	"/openedx/edx-platform/common/static/common/css"
	"/openedx/edx-platform/common/static/js/vendor"
	"/openedx/edx-platform/common/static/xmodule"
	"/openedx/edx-platform/lms/static/certificates/css"
	"/openedx/edx-platform/lms/static/css"
	"/openedx/edx-platform/cms/static/css"
)

test_mode ( ) {
	mode="$1"
	mkdir "$output/${mode}"
	tutor "$mode" start -d lms
	for path in "${test_paths[@]}" ; do 
		outpath="$output/${mode}${path}"
		mkdir -p "$(dirname "$outpath")"
		# This would be the normal way to copy from a container:
		#tutor "$mode" copyfrom lms "$path" "$outpath"
		# but it uses bindmounts, which are VERY slow on macOS, so
		# instead we invoke docker cp directly:
		docker cp "tutor_nightly_${mode}-lms-1:$path" "$outpath" || \
		docker cp "tutor_nightly_${mode}_lms_1:$path" "$outpath"
	done
	tutor "$mode" stop
}

(tutor dev stop ; tutor local stop) || true
tutor config save \
	--set EDX_PLATFORM_REPOSITORY=https://github.com/kdmccormick/edx-platform \
	--set EDX_PLATFORM_VERSION=kdmccormick/assets-sh
tutor plugins disable mfe
tutor plugins enable indigo

tutor images build openedx
test_mode local
tutor dev dc build lms
test_mode dev
#test_mode k8s # TODO

