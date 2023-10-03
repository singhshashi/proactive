#!/bin/bash

# Define the destination directory
DEST_DIR=~/projects/proactive/public/sampleIcons
mkdir -p "$DEST_DIR"

# Extract icon paths and copy them to the destination directory
jq -r '.response[].iconPath' src/components/MultiSelectGrid/sampledata.json | while read -r path; do
    cp "$path" "$DEST_DIR"
done

