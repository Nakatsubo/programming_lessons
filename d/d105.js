// d105
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
  const X = String(lines[0]),
        Y = String(lines[1]);
  if (X.length === Y.length) console.log('Yes');
  else console.log('No');
});