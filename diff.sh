#!/usr/bin/env bash

set -euo pipefail

root_a="${1:-output_py}"
root_b="${2:-output_sh}"
compare_path="${3:-}"

no_bom=/tmp/edx-platform-asset-test/no-bom
rm -rf "$no_bom"
mkdir -p "$no_bom"


failure=""

while read -r rel_path ; do
	path_a="$root_a/$rel_path"
	path_b="$root_b/$rel_path"
	if [[ -L "$path_a" ]] && [[ -L "$path_b" ]] ; then
		path_a_target="$(readlink "$path_a")"
		path_b_target="$(readlink "$path_b")"
		if [[ "$path_a_target" != "$path_b_target" ]] ; then
			echo "Links do not match:"
			echo "   $path_a -> $path_a_target"
			echo "   $path_b -> $path_b_target"
			failure="T"
		fi
	elif [[ -f "$path_a" ]] && [[ -f "$path_b" ]] ; then
		sed '1s/^\xEF\xBB\xBF//' < "$path_a" > "$no_bom/$path_a"
		sed '1s/^\xEF\xBB\xBF//' < "$path_b" > "$no_bom/$path_b"
		if ! diff "$no_bom/$path_a" "$no_bom/$path_b" 1>/dev/null ; then
			# diff will print a message for us if it returns 1
			echo "Files differ:"
			echo "   $path_a"
			echo "   $path_b"
			failure="T"
		fi
	elif [[ -d "$path_a" ]] && [[ -d "$path_b" ]] ; then
		# Both directories; that's all we need to know.
		true
	elif [[ ! -e "$path_a" ]] ; then
		echo "File/dir does not exist:"
		echo "    $path_a"
		failure="T"
	elif [[ ! -e "$path_b" ]] ; then
		echo "File/dir does not exist:"
		echo "    $path_b"
		failure="T"
	else
		echo "These files/dirs have mismatched/unknown types:"
		echo "   $path_a"
		echo "   $path_b"
		failure="T"
	fi
done < <(\
		while IFS= read -d '' -r path_a ; do
			echo "${path_a#"$root_a/"}"
		done < <(find "$root_a/$compare_path" -print0) && \
		while IFS= read -d '' -r path_b ; do
			echo "${path_b#"$root_b/"}"
		done < <(find "$root_b/$compare_path" -print0) \
	| sort -u)

if [[ -n "$failure" ]] ; then
	echo "DIFF FOUND :("
	exit 1
else
	echo "NO DIFF FOUND :)"
	exit 0
fi

