// d186
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
  const INPUT = Number(lines[0]);
  INPUT >= 30 && INPUT < 35 ? console.log('M') : console.log(INPUT);
});