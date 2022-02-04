// d171
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
        [MY_POINT, YOUR_POINT] = INPUTS[0].split(/\s/).map(Number);
        STANDARD_POINT = Number(INPUTS[1]);
  console.log(`${MY_POINT - STANDARD_POINT} ${YOUR_POINT - STANDARD_POINT}`);
});