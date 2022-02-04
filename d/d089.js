// d089
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
  const VALUE  = String(lines[0]);
  const RESULT = VALUE.replace(/[^0-9]/g, '');
  console.log(RESULT);
});