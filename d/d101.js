// d101
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
  const [X, Y] = lines[0].split(/\s/).map(Number);
  let flag = 'YES';
  if (X % 2 === 0 && Y % 2 === 0) flag = 'NO';
  else if (X % 2 !== 0 && Y % 2 !== 0) flag = 'NO';
  console.log(flag);
});