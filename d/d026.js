// d026
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
  // filter() -> 与えられた関数によって実装されたテストに合格したすべての配列からなる新しい配列を生成する。
  console.log(lines.filter(x=> x==='no').length);
});