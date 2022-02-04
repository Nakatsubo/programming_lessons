// d055
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const STRING = String(lines[0]);
  const DEFAULT_STRING = 'Best in';
  console.log(`${DEFAULT_STRING} ${STRING}`);
});