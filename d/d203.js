// d203
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
        STRINGS_ARR = INPUTS[0].split('').map(String);
        STRING      = String(INPUTS[1]),
        NUMBER      = Number(INPUTS[2]);
  STRINGS_ARR[NUMBER - 1] === STRING ? console.log('Yes') : console.log('No');
});