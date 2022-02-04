// d095
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
  const TOTAL = Number(lines[0]),
        CUP   = Number(lines[1]);
  console.log(Math.floor(TOTAL / CUP));
});