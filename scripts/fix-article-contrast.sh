#!/bin/bash

# Batch fix contrast issues across all articles
# Issue: text-blue-900 (dark blue) on dark backgrounds = invisible

ARTICLES_DIR="client/src/pages/articles"

echo "🎨 Fixing contrast issues in articles..."
echo ""

# Files with text-blue-900 issues
FILES=(
  "ThePortfolioApproachManagingMultipleBetsKillingFastPrioritizingByExpectedValue.tsx"
  "ThePersonalizationWithPrivacyAdaptiveUxWithConsent.tsx"
  "TheMicroInteractionsAppleStyleMotionThatGuides.tsx"
  "TheAiToolStackCoordinatingSevenAisWithoutChaos.tsx"
  "TheResultsWhatWeVeLearnedBuildingThisSystem.tsx"
  "TheSolutionADualFilterValidationFramework.tsx"
)

for file in "${FILES[@]}"; do
  filepath="$ARTICLES_DIR/$file"
  
  if [ -f "$filepath" ]; then
    echo "📝 Fixing: $file"
    
    # Replace text-blue-900 with text-cyan-300 (light cyan)
    sed -i '' 's/text-blue-900/text-cyan-300/g' "$filepath"
    
    echo "   ✅ Fixed text-blue-900 → text-cyan-300"
  else
    echo "   ⚠️  File not found: $filepath"
  fi
  
  echo ""
done

echo "✅ Contrast fixes complete!"
echo ""
echo "Summary:"
echo "  - text-blue-900 → text-cyan-300 (dark blue → light cyan)"
echo "  - Fixed ${#FILES[@]} article files"
