// d075
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
  let targetAry = [];
  for (let i = 0; i < INPUTS.length; i += 1) { targetAry.push(Number(INPUTS[i])); }
  const REDUCER = (a, b) => a + b;
  const TOTAL_COUNT = targetAry.reduce(REDUCER);
  console.log(15 - TOTAL_COUNT);
});