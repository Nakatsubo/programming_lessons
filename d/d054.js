// d054
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
  const STICKS = lines[0].split('').map(Number);
  STICKS.length >= 11 ? console.log('OK') : console.log(11 - STICKS.length);
});