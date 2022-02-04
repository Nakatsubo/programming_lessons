// d143
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
  const [M, V, F] = lines[0].split(/\s/).map(Number);
  console.log(Math.floor((M * Math.pow(V, 2)) / (2 * F)));
});