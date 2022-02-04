// d012
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
　let line = lines[0]
  // Math.abs() -> 値の絶対値を求める
  console.log(Math.abs(line))
});