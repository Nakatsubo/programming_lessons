// d056
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
  const [R1, R2] = lines[0].split(/\s/).map(Number);
  console.log(Math.pow(R1, 3) - Math.pow(R2, 3));
});