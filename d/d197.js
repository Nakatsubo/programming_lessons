// d197
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
  const PURCHASE = Number(lines[0]);
  PURCHASE >= 1000 ? console.log(Math.floor(PURCHASE * 0.1)) : console.log(0);
});