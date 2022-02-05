// d128
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
  const INPUTS = lines,
        COUNT  = Number(INPUTS[0]),
        WORD_ARY = INPUTS[1].split(/\s/).map(String);
  let result = [];
  for (let i = 0; i < COUNT; i += 1) { result.push(WORD_ARY[i][0]); }
  console.log(result.join(''));
});