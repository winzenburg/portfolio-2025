#!/bin/bash

# Image Optimization Script
# Converts PNG hero images to optimized JPEGs (NON-DESTRUCTIVE)
# Target: < 200KB per image
#
# USAGE:
#   bash scripts/optimize-images.sh           # Preview mode (safe, doesn't delete PNGs)
#   bash scripts/optimize-images.sh --delete  # Delete originals after conversion
#
# RECOMMENDATION: Run without --delete first to verify quality!

IMAGE_DIR="../client/public/images/articles"
DELETE_ORIGINALS=false

# Check for --delete flag
if [ "$1" = "--delete" ]; then
    DELETE_ORIGINALS=true
    echo "⚠️  WARNING: Original PNG files will be deleted after conversion!"
    echo "   Press Ctrl+C within 5 seconds to cancel..."
    sleep 5
else
    echo "ℹ️  Running in SAFE mode (originals will be kept)"
    echo "   Run with --delete flag to remove PNGs after conversion"
fi

cd "$(dirname "$0")"

echo ""
echo "🖼️  Optimizing hero images..."
echo ""

for png_file in "$IMAGE_DIR"/*-hero.png; do
    if [ -f "$png_file" ]; then
        # Get filename without extension
        basename=$(basename "$png_file" .png)
        jpg_file="$IMAGE_DIR/${basename}.jpg"

        # Get original size
        original_size=$(du -h "$png_file" | cut -f1)

        echo "Processing: $basename"
        echo "  Original: $original_size (PNG)"

        # Convert to JPEG with:
        # - Max width 1200px (maintains aspect ratio)
        # - Format JPEG
        # - Quality 85% (good balance of quality vs size)
        sips -s format jpeg \
             -s formatOptions 85 \
             -Z 1200 \
             "$png_file" \
             --out "$jpg_file" > /dev/null 2>&1

        if [ -f "$jpg_file" ]; then
            new_size=$(du -h "$jpg_file" | cut -f1)
            new_size_kb=$(du -k "$jpg_file" | cut -f1)

            echo "  Optimized: $new_size (JPG)"

            if [ $new_size_kb -lt 200 ]; then
                echo "  ✓ Under 200KB target"
            else
                echo "  ⚠ Still above 200KB (${new_size_kb}KB)"
            fi

            # Remove original PNG only if --delete flag was provided
            if [ "$DELETE_ORIGINALS" = true ]; then
                rm "$png_file"
                echo "  ✓ Removed original PNG"
            else
                echo "  ℹ️  Keeping original PNG (use --delete to remove)"
            fi
        else
            echo "  ✗ Failed to create JPEG"
        fi

        echo ""
    fi
done

echo "✅ Optimization complete!"
echo ""
echo "📊 Final sizes:"
du -h "$IMAGE_DIR"/*-hero.{jpg,png} 2>/dev/null | awk '{print "  " $2 ": " $1}'

if [ "$DELETE_ORIGINALS" = false ]; then
    echo ""
    echo "ℹ️  Next steps:"
    echo "   1. Check the JPG quality in your browser"
    echo "   2. If satisfied, run: bash scripts/optimize-images.sh --delete"
    echo "   3. Update article components to use .jpg instead of .png"
fi
