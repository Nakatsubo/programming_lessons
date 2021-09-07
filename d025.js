// d025
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
  // padStart -> 結果の文字列が指定した長さになるように、現在の文字列を他の文字列で (必要に応じて繰り返して) 延長する。
  console.log(line.padStart(3,0));
});