// d034
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
  const INPUT = Number(lines);
  if (21 % INPUT !== 0) {
    console.log(21 % INPUT);
  } else {
    console.log(INPUT);
  }
});