// d188
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
  const setA = Number(lines[0]),
        setB = Number(lines[1]);
  setA + setB === 21 ? console.log('Win') : console.log(setA + setB);
});