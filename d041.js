// d041
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
  const [N, D, E] = lines[0].split(/\s/).map(Number);
  N < D * E ? console.log('OK') : console.log('NG');
});