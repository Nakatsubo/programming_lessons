// d125
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
  let dataAry = []
  for (let i = 0; i < COUNT; i += 1) { dataAry.push(Number(INPUTS[i + 1])); }
  const REDUCER = (a, b) => a + b,
        RESULT  = dataAry.reduce(REDUCER);
  console.log(Math.trunc(RESULT / COUNT));
});