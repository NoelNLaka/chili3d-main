import { execSync } from 'child_process';

console.log('Installing CMake 3.30.0...');

// Download and install CMake 3.30.0
execSync('wget -O cmake.sh https://github.com/Kitware/CMake/releases/download/v3.30.0/cmake-3.30.0-linux-x86_64.sh', { stdio: 'inherit' });
execSync('chmod +x cmake.sh', { stdio: 'inherit' });
execSync('./cmake.sh --skip-license --prefix=/usr/local', { stdio: 'inherit' });
execSync('rm cmake.sh', { stdio: 'inherit' });

console.log('CMake 3.30.0 installed successfully!');
