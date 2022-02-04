// d019
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
  let line = lines[0].split(/\s/)
  let str = line[0]
  let num = line[1]-1
  // charAt -> 文字を抜き出す
  console.log(str.charAt(num))
});