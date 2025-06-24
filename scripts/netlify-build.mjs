import { execSync } from 'child_process';

// Build WASM dependencies
console.log('Building WASM dependencies...');
try {
    await execSync('npm run setup:wasm', { stdio: 'inherit' });
} catch (error) {
    console.error('Failed to setup WASM dependencies:', error);
    process.exit(1);
}

// Build WASM
console.log('Building WASM...');
try {
    await execSync('npm run build:wasm', { stdio: 'inherit' });
} catch (error) {
    console.error('Failed to build WASM:', error);
    process.exit(1);
}

// Build frontend
console.log('Building frontend...');
try {
    await execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
    console.error('Failed to build frontend:', error);
    process.exit(1);
}

console.log('Build completed successfully!');
