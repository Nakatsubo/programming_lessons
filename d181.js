// d181
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
  const INPUTS  = lines,
        numberA = Number(INPUTS[0]),
        numberB = Number(INPUTS[1]),
        numberC = Number(INPUTS[2]);
  console.log(`${numberA}-${numberB}-${numberC}`);
});