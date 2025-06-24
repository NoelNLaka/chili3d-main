import { execSync } from 'child_process';
import { mkdirSync } from 'fs';

console.log('Installing CMake 3.30.0...');

// Create a directory for CMake installation
const cmakeDir = '/opt/build/repo/cpp/build/cmake';
try {
    mkdirSync(cmakeDir, { recursive: true });
} catch (error) {
    console.error('Failed to create CMake directory:', error);
    process.exit(1);
}

// Download and install CMake 3.30.0
try {
    execSync('wget -O cmake.sh https://github.com/Kitware/CMake/releases/download/v3.30.0/cmake-3.30.0-linux-x86_64.sh', { 
        stdio: 'inherit',
        cwd: cmakeDir
    });
    execSync('chmod +x cmake.sh', { 
        stdio: 'inherit',
        cwd: cmakeDir
    });
    execSync('./cmake.sh --skip-license --prefix=/opt/build/repo/cpp/build/cmake', { 
        stdio: 'inherit',
        cwd: cmakeDir
    });
    execSync('rm cmake.sh', { 
        stdio: 'inherit',
        cwd: cmakeDir
    });
} catch (error) {
    console.error('Failed to install CMake:', error);
    process.exit(1);
}

// Add CMake to PATH
process.env.PATH = `${cmakeDir}/bin:${process.env.PATH}`;

console.log('CMake 3.30.0 installed successfully!');
