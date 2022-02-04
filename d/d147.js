// d147
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
        BOTTOM = Number(INPUTS[0]);
        HEIGHT_ARY = INPUTS[1].split(/\s/).map(Number);
  const minValueFunc = (a, b) => { return Math.min(a, b); }
  const MIN_VALUE = HEIGHT_ARY.reduce(minValueFunc);
  console.log(BOTTOM * MIN_VALUE);
});