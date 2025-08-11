#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔨 Building Emergency First Aid App...');

// Build the frontend with Vite
const viteBuild = spawn('npx', ['vite', 'build'], {
  stdio: 'inherit',
  cwd: __dirname
});

viteBuild.on('close', (code) => {
  if (code !== 0) {
    console.error('❌ Vite build failed');
    process.exit(1);
  }
  
  console.log('✅ Frontend build completed');
  
  // Build the backend with esbuild
  console.log('🔨 Building backend...');
  const backendBuild = spawn('npx', [
    'esbuild', 
    'server/index.ts',
    '--platform=node',
    '--packages=external', 
    '--bundle',
    '--format=esm',
    '--outfile=dist/index.js'
  ], {
    stdio: 'inherit',
    cwd: __dirname
  });
  
  backendBuild.on('close', (backendCode) => {
    if (backendCode !== 0) {
      console.error('❌ Backend build failed');
      process.exit(1);
    }
    
    console.log('✅ Backend build completed');
    
    // Copy build files to server directory for production serving
    console.log('📋 Copying files for production serving...');
    const copyFiles = spawn('cp', ['-r', 'dist/public/*', 'server/public/'], {
      shell: true,
      stdio: 'inherit',
      cwd: __dirname
    });
    
    copyFiles.on('close', (copyCode) => {
      if (copyCode !== 0) {
        console.log('⚠️ File copy failed, but build is complete');
      } else {
        console.log('✅ Files copied for production serving');
      }
      console.log('🎉 Build process finished successfully!');
    });
  });
});