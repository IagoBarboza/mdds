const fs = require('fs');
const { exec } = require('child_process');

console.log('Build has started!');

if (fs.existsSync('dist')) fs.rmSync('dist', { recursive: true });

exec('npx tsc', () => {
  fs.copyFileSync('./package.json', './dist/package.json');
  console.log('Build has finished!');
});
