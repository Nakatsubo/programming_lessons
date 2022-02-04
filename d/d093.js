// d093
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
  const NEW_NUMBER_ARY = NUMBER_ARY.filter((elem) => { return elem === NUMBER_ARY[0]; });
  NUMBER_ARY.length === NEW_NUMBER_ARY.length ? console.log(NUMBER_ARY.join('')) : console.log('No'); 
});