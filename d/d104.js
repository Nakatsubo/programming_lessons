// d104
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
  if (VALUE < 10) console.log(1000);
  else console.log(150 * VALUE);
});