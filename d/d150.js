// d150
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
        CURRENT = Number(INPUTS[0]),
        TARGET  = Number(INPUTS[1]);
  CURRENT >= TARGET ? console.log('Thank you') : console.log(TARGET - CURRENT);
});