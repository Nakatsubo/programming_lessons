// d195
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
  const NUMBER = Number(lines[0]);
  NUMBER % 2 === 0 ? console.log(`${1.5 * NUMBER}.0`) : console.log(1.5 * NUMBER);
});