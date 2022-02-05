// d127
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
  const VALUE = String(lines[0]),
        NEW_VALUE_ARY = VALUE.replace(/[^0-9\.]/g, '').split('');
  const RESULT = NEW_VALUE_ARY.filter((elem) => { return elem === NEW_VALUE_ARY[0]; })
  RESULT.length === NEW_VALUE_ARY.length ? console.log('Yes') : console.log('No');
});