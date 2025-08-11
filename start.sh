#!/bin/bash

echo "🚀 Starting Emergency First Aid App..."

# Check if production build exists
if [ ! -f "dist/index.js" ]; then
    echo "❌ Production build not found. Running deployment build..."
    ./deploy.sh
    if [ $? -ne 0 ]; then
        echo "❌ Deployment build failed!"
        exit 1
    fi
fi

# Start the production server
echo "🌐 Starting production server..."
NODE_ENV=production node dist/index.js