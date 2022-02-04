// d053
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
  const INPUT = String(lines[0]);
  INPUT === 'candy' || INPUT === 'chocolate' ? console.log('Thanks!') : console.log('No!');
});