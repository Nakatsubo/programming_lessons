// d087
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
        COUNT  = Number(INPUTS[0]);
  let result = [];
  for (let i = 0; i < COUNT; i += 1) { result.push(INPUTS[i + 1]); }
  console.log(result.join(''));
});