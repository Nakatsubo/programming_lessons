// d045
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
  let numberInput = Number(lines[0]);
  if (numberInput === 5) console.log('A');
  else if (numberInput === 4) console.log('B');
  else if (numberInput === 3) console.log('C');
  else if (numberInput === 2) console.log('D');
  else if (numberInput === 1) console.log('E');
});