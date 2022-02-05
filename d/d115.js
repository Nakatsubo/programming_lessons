// d115
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
  const COUNT = Number(lines[0]);
  if (COUNT % 2 === 0) console.log(COUNT / 2);
  else console.log((COUNT - 1) / 2);
});