// d083
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
  const [X, Y] = lines[0].split(/\s/).map(Number);
  X + Y < 16 ? console.log('HIT') : console.log('STAND');
});