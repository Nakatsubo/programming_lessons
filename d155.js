// d155
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
        COUNT  = Number(INPUTS[0]),
        [LOWER_LIMIT, GROUP_RATE, PERSONAL_RATE] = INPUTS[1].split(/\s/).map(Number);
  COUNT >= LOWER_LIMIT ? console.log(COUNT * GROUP_RATE) : console.log(COUNT * PERSONAL_RATE);
});