#!/bin/bash

# Emergency First Aid App Deployment Script
echo "🚀 Starting deployment build..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Ensure server/public directory exists
echo "📁 Preparing server directory..."
mkdir -p server/public

# Build the application
echo "🔨 Building application..."
node build.js

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Check if build output exists
if [ ! -d "dist/public" ] || [ ! -f "dist/index.js" ]; then
    echo "❌ Build output missing!"
    exit 1
fi

# Ensure files are copied to server/public for production serving
echo "📋 Ensuring production files are in place..."
rm -rf server/public/*
cp -r dist/public/* server/public/

echo "✅ Build completed successfully!"
echo "📁 Build output:"
ls -la dist/
echo "📁 Static files:"
ls -la dist/public/

echo "🎉 Deployment build ready!"