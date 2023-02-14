#!/usr/bin/env bash

set -euo pipefail

root_a="${1:-output_py/local}"
root_b="${2:-output_sh/local}"
compare_path="${3:-openedx}"

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
		if ! diff "$path_a" "$path_b" ; then
			# diff will print a message for us if it returns 1
			failure="T"
		fi
	elif [[ -d "$path_a" ]] && [[ -d "$path_b" ]] ; then
		# Both directories; that's all we need to know.
		true
	else
		echo "These files have mismatched/unknown types, or one of them is missing:"
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

