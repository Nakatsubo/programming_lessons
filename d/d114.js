// d114
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
  const [TAX, PRICE] = lines[0].split(/\s/).map(Number);
  console.log(Math.floor(((100 + TAX) / 100) * PRICE));
});