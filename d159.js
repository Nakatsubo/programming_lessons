// d159
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
  const INPUTS = lines;
  let stringAry = [];
  for (let i = 0; i < INPUTS.length; i += 1) { stringAry.push(INPUTS[i]); }
  const searchLongWord = (ary) => {
    return Math.max(...ary.map(el => el.length));
  }
  console.log(searchLongWord(stringAry));
});