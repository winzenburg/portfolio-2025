#!/bin/bash

# Setup macOS Automation for LinkedIn Content
# This script creates a LaunchAgent that runs automatically every Monday at 9 AM

set -e

PROJECT_DIR="/Users/ryanwinzenburg/Projects/Portfolio-2025"
SCRIPT_PATH="$PROJECT_DIR/scripts/send-weekly-content.js"
PLIST_NAME="com.ryanwinzenburg.linkedin-content"
PLIST_PATH="$HOME/Library/LaunchAgents/$PLIST_NAME.plist"

echo "🚀 Setting up LinkedIn Content Automation"
echo "=========================================="
echo ""

# Check if script exists
if [ ! -f "$SCRIPT_PATH" ]; then
    echo "❌ Error: Script not found at $SCRIPT_PATH"
    exit 1
fi

# Make script executable
chmod +x "$SCRIPT_PATH"
echo "✅ Made script executable"

# Create LaunchAgents directory if it doesn't exist
mkdir -p "$HOME/Library/LaunchAgents"
echo "✅ Ensured LaunchAgents directory exists"

# Create the plist file
cat > "$PLIST_PATH" << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.ryanwinzenburg.linkedin-content</string>

    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/node</string>
        <string>/Users/ryanwinzenburg/Projects/Portfolio-2025/scripts/send-weekly-content.js</string>
    </array>

    <key>StartCalendarInterval</key>
    <dict>
        <key>Weekday</key>
        <integer>1</integer>  <!-- Monday = 1 -->
        <key>Hour</key>
        <integer>9</integer>   <!-- 9 AM -->
        <key>Minute</key>
        <integer>0</integer>
    </dict>

    <key>StandardOutPath</key>
    <string>/Users/ryanwinzenburg/Projects/Portfolio-2025/logs/linkedin-automation.log</string>

    <key>StandardErrorPath</key>
    <string>/Users/ryanwinzenburg/Projects/Portfolio-2025/logs/linkedin-automation-error.log</string>

    <key>EnvironmentVariables</key>
    <dict>
        <key>PATH</key>
        <string>/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</string>
        <key>NODE_ENV</key>
        <string>production</string>
    </dict>

    <key>RunAtLoad</key>
    <false/>

    <key>Nice</key>
    <integer>1</integer>
</dict>
</plist>
EOF

echo "✅ Created LaunchAgent plist at:"
echo "   $PLIST_PATH"

# Create logs directory
mkdir -p "$PROJECT_DIR/logs"
echo "✅ Created logs directory"

# Find node path
NODE_PATH=$(which node)
echo ""
echo "📍 Detected node at: $NODE_PATH"

# Update plist with actual node path
sed -i '' "s|/usr/local/bin/node|$NODE_PATH|g" "$PLIST_PATH"
echo "✅ Updated plist with correct node path"

# Unload existing agent if running
if launchctl list | grep -q "$PLIST_NAME"; then
    echo ""
    echo "🔄 Unloading existing LaunchAgent..."
    launchctl unload "$PLIST_PATH" 2>/dev/null || true
fi

# Load the LaunchAgent
echo ""
echo "🔄 Loading LaunchAgent..."
launchctl load "$PLIST_PATH"

if launchctl list | grep -q "$PLIST_NAME"; then
    echo "✅ LaunchAgent loaded successfully!"
else
    echo "⚠️  LaunchAgent may not have loaded. Check status with:"
    echo "   launchctl list | grep linkedin-content"
fi

echo ""
echo "=========================================="
echo "✨ Automation Setup Complete!"
echo "=========================================="
echo ""
echo "📅 Your LinkedIn content will be automatically emailed:"
echo "   • Every Monday at 9:00 AM"
echo "   • For the current week (auto-detected)"
echo "   • To: ryanwinzenburg@gmail.com"
echo ""
echo "📋 Logs will be saved to:"
echo "   • Success: $PROJECT_DIR/logs/linkedin-automation.log"
echo "   • Errors:  $PROJECT_DIR/logs/linkedin-automation-error.log"
echo ""
echo "🔧 Management Commands:"
echo "   • Check status:  launchctl list | grep linkedin-content"
echo "   • View logs:     tail -f $PROJECT_DIR/logs/linkedin-automation.log"
echo "   • Disable:       launchctl unload $PLIST_PATH"
echo "   • Enable:        launchctl load $PLIST_PATH"
echo "   • Test now:      node $SCRIPT_PATH 1"
echo ""
echo "💡 To change the schedule, edit:"
echo "   $PLIST_PATH"
echo ""
echo "   Then reload with:"
echo "   launchctl unload $PLIST_PATH && launchctl load $PLIST_PATH"
echo ""
