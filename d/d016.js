// d016
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
  let str = lines[0]
  let num = lines[1]
  // substr() -> 文字列を指定した範囲で切り出す
  console.log(str.substr(0,num));
});