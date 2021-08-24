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
  let x = lines[0].split(/\s/).map(Number)
  // Number.isInteger() -> メソッドは渡された値が整数かどうかを判定する
  // Math.log2() -> 数値の 2 を底とした対数を返す
  x >= 1 && Number.isInteger(Math.log2(x)) ? console.log('OK') : console.log('NG') 
});