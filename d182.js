// d182
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
  const INPUTS   = lines,
        DISTANCE = Number(INPUTS[0]),
        FUEL     = Number(INPUTS[1]);
  console.log(Math.floor(DISTANCE / FUEL));
});