// d160
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
        HEIGHT = Number(INPUTS[0]),
        SCALE  = Number(INPUTS[1]);
  console.log(Math.floor(HEIGHT / 10) * SCALE);
});