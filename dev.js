#!/usr/bin/env node

// Development server script for Emergency First Aid PWA
// This runs the TypeScript server with Vite integration

import { spawn } from 'child_process';

console.log('🚀 Starting Emergency First Aid PWA development server...');

// Set development environment
process.env.NODE_ENV = 'development';

// Start the TypeScript server using tsx
const server = spawn('tsx', ['server/index.ts'], {
  stdio: 'inherit',
  env: process.env
});

server.on('error', (err) => {
  console.error('❌ Failed to start development server:', err.message);
  process.exit(1);
});

server.on('close', (code) => {
  console.log(`💤 Development server stopped with code ${code}`);
  process.exit(code);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down development server...');
  server.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Terminating development server...');
  server.kill('SIGTERM');
});