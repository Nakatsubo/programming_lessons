// d113
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
  const [HOUR, MINUTE] = lines[0].split(':').map(Number);
  const ADJUST_HOUR = HOUR - 8;
  if (Math.sign(ADJUST_HOUR) === - 1) console.log(`${24 - Math.abs(ADJUST_HOUR)}:${MINUTE}`);
  else console.log(`${ADJUST_HOUR}:${MINUTE}`);
});