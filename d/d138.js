// d138
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
        [TEXT_COUNT, COUNT] = INPUTS[0].split(/\s/).map(Number);
  for (let i = 0; i < COUNT; i += 1) {
    console.log(INPUTS[i + 1]);
  }
});