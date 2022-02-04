// d167
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
  const PRICE = Number(lines[0]);
  PRICE >= 1000 ? console.log(PRICE + 3) : console.log(PRICE);
});