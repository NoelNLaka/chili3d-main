import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Copy prebuilt WASM artifacts to public directory
const wasmArtifacts = [
    'chili-wasm.wasm',
    'chili-wasm.js',
    'chili-wasm.d.ts',
];
const srcDir = path.resolve('packages/chili-wasm/lib');
const destDir = path.resolve('public');

console.log('Copying prebuilt WASM artifacts to public/ ...');
for (const file of wasmArtifacts) {
    const src = path.join(srcDir, file);
    const dest = path.join(destDir, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} to public/`);
    } else {
        console.warn(`Warning: ${file} not found in ${srcDir}`);
    }
}

// Build frontend
console.log('Building frontend...');
try {
    execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
    console.error('Failed to build frontend:', error);
    process.exit(1);
}

console.log('Build completed successfully!');
