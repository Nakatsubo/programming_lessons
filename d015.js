// d015
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
  // i-- -> 一度目の出力で変数はマイナスされている？
  for(let i=line;i--;)console.log(i+1)
});