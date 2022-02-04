// d149
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
        STRING_ARY = INPUTS[0].split('').map(String),
        NUMBER = Number(lines[1]);
  const INDEX = NUMBER - 1;
  const REMOVE_ELE = STRING_ARY.splice(INDEX, 1);
  const NEW_STRING_ARY = STRING_ARY.filter(n => n !== REMOVE_ELE);
  console.log(NEW_STRING_ARY.join(''));
});