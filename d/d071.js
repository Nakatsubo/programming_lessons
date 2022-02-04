// d071
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
  const [TEMPARETURE, HUMIDITY] = lines[0].split(/\s/).map(Number);
  let flag = 'Yes';
  if (TEMPARETURE >= 25 || HUMIDITY <= 40) {
    if (TEMPARETURE >= 25 && HUMIDITY <= 40) {
      flag = 'No';
    }
  } else {
    flag = 'No';
  }
  console.log(flag);
});