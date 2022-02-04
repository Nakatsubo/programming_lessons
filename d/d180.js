// d180
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
  const [SOUND_A, SOUND_B] = lines[0].split(/\s/).map(Number);
  console.log(Math.abs(SOUND_A - SOUND_B));
});