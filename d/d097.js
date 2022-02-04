// d097
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
  const SCHEDULE_ARY = lines[0].split(/\s/).map(Number);
  let result = 0;
  for (let i = 0; i < SCHEDULE_ARY.length; i += 1) {
    if (SCHEDULE_ARY[i] === 1) result += 1;
  }
  result >= 5 ? console.log('yes'): console.log('no');
});