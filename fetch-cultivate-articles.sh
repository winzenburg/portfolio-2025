#!/bin/bash

# Fetch Cultivate Articles from GitHub
# This script downloads all articles from the SaaS-Starter repo

set -e

REPO_URL="https://github.com/winzenburg/SaaS-Starter"
ARTICLES_PATH="articles"
TARGET_DIR="cultivate-source"

echo "🔍 Fetching Cultivate articles from GitHub..."
echo ""

# Create target directory
mkdir -p "$TARGET_DIR"

# Clone the repo (just the articles directory)
echo "📥 Cloning repository..."
if [ -d "temp-saas-starter" ]; then
    rm -rf temp-saas-starter
fi

git clone --depth 1 --filter=blob:none --sparse "$REPO_URL" temp-saas-starter
cd temp-saas-starter

echo "📂 Checking out articles directory..."
git sparse-checkout set articles

echo "📋 Copying articles..."
cp -r articles/* "../$TARGET_DIR/"

echo "🧹 Cleaning up..."
cd ..
rm -rf temp-saas-starter

echo ""
echo "✅ Success! Articles downloaded to: $TARGET_DIR/"
echo ""
echo "📊 Article count:"
ls -1 "$TARGET_DIR"/*.md 2>/dev/null | wc -l

echo ""
echo "📝 Articles:"
ls -1 "$TARGET_DIR"/*.md 2>/dev/null || ls -1 "$TARGET_DIR"/ 2>/dev/null || echo "  (checking...)"

echo ""
echo "🚀 Next step: Run the batch rewrite script"
echo "   npm run batch-rewrite -- --dir ./$TARGET_DIR/ --output ./cultivate-output/"

