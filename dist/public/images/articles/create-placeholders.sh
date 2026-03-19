#!/bin/bash

# Array of article titles
declare -A articles=(
    ["autonomous-ai-coding-hero.png"]="Autonomous AI Coding"
    ["ai-coding-economics-hero.png"]="AI Coding Economics"
    ["choosing-ai-coding-mode-hero.png"]="Choosing AI Coding Mode"
    ["writing-prds-for-ai-hero.png"]="Writing PRDs for AI"
    ["self-validating-ai-agents-hero.png"]="Self-Validating AI Agents"
    ["fresh-context-per-iteration-hero.png"]="Fresh Context Per Iteration"
    ["compound-intelligence-hero.png"]="Compound Intelligence"
    ["integration-docs-hero.png"]="Integration Documentation"
)

# Create each image using sips (built-in macOS tool)
for filename in "${!articles[@]}"; do
    title="${articles[$filename]}"
    
    # Create a simple colored rectangle as placeholder
    # Using sips to create a basic image, then we'll add text overlay later
    # For now, create a solid color PNG
    /usr/bin/python3 - "$filename" "$title" <<'PYTHON'
import sys
import struct

filename = sys.argv[1]
title = sys.argv[2]

# Create a simple PNG programmatically
width, height = 1200, 300
bg_color = (15, 23, 42)  # slate-950

# PNG file format (simplified)
def create_simple_png(width, height, color):
    import zlib
    
    # PNG signature
    signature = b'\x89PNG\r\n\x1a\n'
    
    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    ihdr = b'IHDR' + ihdr_data
    ihdr_crc = zlib.crc32(ihdr) & 0xffffffff
    ihdr_chunk = struct.pack('>I', 13) + ihdr + struct.pack('>I', ihdr_crc)
    
    # IDAT chunk (image data)
    raw_data = b''
    for y in range(height):
        raw_data += b'\x00'  # Filter type
        for x in range(width):
            raw_data += bytes(color)  # RGB
    
    compressed_data = zlib.compress(raw_data, 9)
    idat = b'IDAT' + compressed_data
    idat_crc = zlib.crc32(idat) & 0xffffffff
    idat_chunk = struct.pack('>I', len(compressed_data)) + idat + struct.pack('>I', idat_crc)
    
    # IEND chunk
    iend = b'IEND'
    iend_crc = zlib.crc32(iend) & 0xffffffff
    iend_chunk = struct.pack('>I', 0) + iend + struct.pack('>I', iend_crc)
    
    return signature + ihdr_chunk + idat_chunk + iend_chunk

with open(filename, 'wb') as f:
    f.write(create_simple_png(width, height, bg_color))

print(f"✓ Created: {filename}")
PYTHON
done

echo "✅ All placeholder images created!"
