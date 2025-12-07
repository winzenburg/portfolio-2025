#!/bin/bash

# Winzenburg.com Deployment Script
# This script builds and packages your portfolio site for deployment to Bluehost

set -e

echo "🚀 Starting deployment build..."

# Build the site
echo "📦 Building site..."
pnpm run build

# Create deployment package
echo "📦 Creating deployment ZIP..."
cd dist/public
zip -r ../../winzenburg-site-deploy.zip .
cd ../..

# Get file size
FILE_SIZE=$(ls -lh winzenburg-site-deploy.zip | awk '{print $5}')

echo "✅ Deployment package created!"
echo ""
echo "📦 Package: winzenburg-site-deploy.zip ($FILE_SIZE)"
echo ""
echo "📋 Next steps to deploy to Bluehost:"
echo "1. Go to https://my.bluehost.com and log in"
echo "2. Open cPanel → File Manager"
echo "3. Navigate to public_html folder"
echo "4. Delete old files (backup first if needed)"
echo "5. Upload winzenburg-site-deploy.zip"
echo "6. Right-click the ZIP and select 'Extract'"
echo "7. Delete the ZIP file after extraction"
echo "8. Visit https://winzenburg.com to verify"
echo ""
echo "🎉 Your site is ready to upload!"
