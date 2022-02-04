// d076
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
  const INPUTS        = lines,
        NG_WORD       = String(INPUTS[0]),
        STANDARD_WORD = String(INPUTS[1]);
  STANDARD_WORD.includes(NG_WORD) === true ? console.log('NG') : console.log(STANDARD_WORD);
});