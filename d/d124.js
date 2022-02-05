// d124
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
  const VALUE = Number(lines[0]);
  VALUE % 24 === 0 ? console.log(VALUE / 24) : console.log(Math.floor(VALUE / 24) + 1);
});