// d048
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
  const INPUTS = lines;
   for (let i = 0; i < INPUTS.length - 1; i += 1) {
     console.log(INPUTS[i + 1] - INPUTS[i]);
   }
});