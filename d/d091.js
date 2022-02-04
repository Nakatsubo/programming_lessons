// d091
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
  const NUMBER_ARY = lines[0].split(/\s/).map(Number);
  let flag = 0;
  for (let i = 0; i < NUMBER_ARY.length; i += 1) {
    if (NUMBER_ARY[i] <= 2) flag += 1;
  }
  console.log(flag);
});