// d168
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
        YEAR   = String(INPUTS[0]),
        MONTH  = String(INPUTS[1]),
        DAY    = String(INPUTS[2]);
  console.log(`${MONTH}/${DAY}/${YEAR}`);
});