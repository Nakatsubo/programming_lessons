// d187
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
  const lineA = String(lines[0]),
        lineB = String(lines[1]);
  console.log(`${lineA}/${lineB}`);
});