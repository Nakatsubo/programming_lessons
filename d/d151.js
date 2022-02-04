// d151
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
        TYPE   = String(INPUTS[0]),
        PRICE  = Number(INPUTS[1]);
  TYPE === 'chocolate' ? console.log(PRICE * 2) : console.log(PRICE * 5);
});