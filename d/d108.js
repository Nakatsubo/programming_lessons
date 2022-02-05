// d108
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
  const VALUE = Number(lines[0]);
  if (24 % VALUE === 0) console.log(24 / VALUE);
  else console.log(Math.floor(24 / VALUE) + 1);
});