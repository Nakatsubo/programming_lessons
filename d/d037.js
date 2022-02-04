// 037
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
  const INPUTS = lines,
        CASE   = Number(INPUTS[0]),
        DAYS   = Number(INPUTS[1]);
  DAYS % CASE !== 0 ? console.log(Math.floor(DAYS / CASE + 1)) : console.log(Math.floor(DAYS / CASE));
});