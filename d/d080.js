// d080
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
  const [ALCOHOL_ON, ALCOHOL_OFF] = lines[0].split(/\s/).map(Number);
  console.log(ALCOHOL_ON * 6000 + ALCOHOL_OFF * 4000);
});