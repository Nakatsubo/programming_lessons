// d158
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
  const NUMBER = Number(lines[0]);
  NUMBER >= 40 && NUMBER <= 60 ? console.log('OK') : console.log('NG');
});