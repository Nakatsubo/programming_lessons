// d118
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
  const JUDGE = String(lines[0]),
        YEAR  = Number(lines[1]);
  if (JUDGE === 'S') console.log(1926 + YEAR - 1);
  else if (JUDGE === 'H') console.log(1989 + YEAR - 1);
});