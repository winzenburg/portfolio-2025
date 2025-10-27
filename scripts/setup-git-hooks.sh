#!/bin/bash

# Setup script for Git hooks
# Run this after cloning the repository

echo "🔧 Setting up Git hooks..."

HOOKS_DIR=".git/hooks"
HOOK_FILE="$HOOKS_DIR/pre-commit"

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    echo "   Run this script from the project root"
    exit 1
fi

# Create the pre-commit hook
cat > "$HOOK_FILE" << 'EOF'
#!/bin/bash

# Pre-commit hook for Portfolio 2025
# Runs validation checks before allowing commits
#
# To bypass this hook (not recommended):
#   git commit --no-verify

set -e

echo "🔍 Running pre-commit checks..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track if any checks fail
FAILED=0

# Check 1: TypeScript type checking
echo "📋 [1/2] Running TypeScript type check..."
if pnpm check > /dev/null 2>&1; then
    echo -e "${GREEN}✓ TypeScript check passed${NC}"
else
    echo -e "${RED}✗ TypeScript check failed${NC}"
    echo ""
    echo "Run 'pnpm check' to see errors"
    FAILED=1
fi

echo ""

# Check 2: Article metadata validation
echo "📝 [2/2] Validating article metadata..."
if pnpm validate-articles > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Article validation passed${NC}"
    echo -e "${YELLOW}  (Warnings like image sizes are OK - won't block commit)${NC}"
else
    echo -e "${RED}✗ Article validation found critical issues${NC}"
    echo ""
    echo "Run 'pnpm validate-articles' to see details"
    FAILED=1
fi

echo ""

# Summary
if [ $FAILED -eq 1 ]; then
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${RED}Pre-commit checks FAILED${NC}"
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    echo "Fix the issues above and try again."
    echo "To bypass (not recommended): git commit --no-verify"
    echo ""
    exit 1
else
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}✓ All pre-commit checks passed${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    exit 0
fi
EOF

# Make the hook executable
chmod +x "$HOOK_FILE"

echo "✅ Pre-commit hook installed successfully!"
echo ""
echo "The hook will now run automatically before each commit."
echo "It checks:"
echo "  • TypeScript type checking"
echo "  • Article metadata validation"
echo ""
echo "To bypass the hook (not recommended):"
echo "  git commit --no-verify"
