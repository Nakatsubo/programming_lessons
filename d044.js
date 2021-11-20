// d044
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
  const INPUTS = lines[0].split(/\s/);
  INPUTS[1] === 'M' ? console.log(`Hi, Mr. ${INPUTS[0]}`) : console.log(`Hi, Ms. ${INPUTS[0]}`);
});