// d079
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
  const STRING_ARY = lines[0].split('').map(String);
  const NEW_STRING_ARY = STRING_ARY.filter((elem) => elem === STRING_ARY[0]); 
  STRING_ARY.length !== NEW_STRING_ARY.length ? console.log('OK') : console.log('NG');
});