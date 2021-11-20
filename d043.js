// d043
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
  const INPUT = Number(lines[0]);
  if (INPUT >= 71) {
    console.log('rainy');
  } else if (INPUT <= 70 && INPUT >= 31) {
    console.log('cloudy');
  } else {
    console.log('sunny');
  }
});