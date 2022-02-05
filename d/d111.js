// d111
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
        STRING_ARY = INPUTS[1].split('').map(String);
  let result = [];
  for (let i = 0; i < COUNT; i += 1) { result.push(STRING_ARY[i]); }
  console.log(result.join(''));
});