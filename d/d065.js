// d065
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
  const NUMBER_ARY = lines[0].split('').map(Number);
  if (NUMBER_ARY[0] === 2) console.log('ok');
  else if (NUMBER_ARY[0] === 4) console.log('error');
  else console.log('unknown');
});