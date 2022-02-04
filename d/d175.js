// d175
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
  const VALUE = lines[0];
  if (VALUE === 'A') console.log(10);
  else if (VALUE === 'B') console.log(11);
  else console.log(VALUE);
});