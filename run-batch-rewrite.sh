#!/bin/bash

# Run Batch Rewrite with .env file loaded
# This script loads your .env file and runs the batch rewrite

set -e

cd "$(dirname "$0")"

echo "🔧 Loading environment variables from .env..."

# Load .env file if it exists
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
    echo "✅ .env file loaded"
else
    echo "❌ .env file not found"
    exit 1
fi

# Check if ANTHROPIC_API_KEY is set
if [ -z "$ANTHROPIC_API_KEY" ]; then
    echo ""
    echo "❌ ANTHROPIC_API_KEY not found in .env file"
    echo ""
    echo "Please add this line to your .env file:"
    echo "ANTHROPIC_API_KEY=your_actual_api_key_here"
    echo ""
    exit 1
fi

echo "✅ ANTHROPIC_API_KEY is set"
echo ""

# Test the API key
echo "🧪 Testing API key..."
npm run test-anthropic

if [ $? -eq 0 ]; then
    echo ""
    echo "🚀 Starting batch rewrite of 25 articles..."
    echo "   This will take about 15 minutes"
    echo "   Cost: ~$1.50-3.00"
    echo ""
    
    # Create output directory
    mkdir -p cultivate-output
    
    # Run batch rewrite
    npm run batch-rewrite -- \
        --dir ./cultivate-source/ \
        --output ./cultivate-output/
    
    echo ""
    echo "✅ Batch rewrite complete!"
    echo ""
    echo "📂 Rewritten articles are in: cultivate-output/"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Review articles in cultivate-output/"
    echo "   2. Add visual elements (pull quotes, stats cards)"
    echo "   3. Move to client/src/pages/articles/"
    echo "   4. Update Articles.tsx with metadata"
    echo "   5. Test with: npm run dev"
    echo ""
else
    echo ""
    echo "❌ API key test failed"
    echo "Please check your ANTHROPIC_API_KEY in .env file"
    exit 1
fi

