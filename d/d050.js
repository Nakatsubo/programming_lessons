// d050
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
  let result = 0;
  for (let i = 0; i < NUMBER_ARY.length; i += 1) {
    if (NUMBER_ARY[i] >= 5) result += 5;
    else result += NUMBER_ARY[i];
  }
  console.log(result);
});