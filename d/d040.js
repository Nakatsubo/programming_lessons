// d040
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
  let result = 0;
  for (let i = 0; i < INPUTS.length; i += 1) {
    INPUTS[i] <= 30 ? result += 1 : result += 0;
  }
  console.log(result);
});