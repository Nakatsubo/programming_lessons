// d109
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
  const [MONTH, DAY] = lines[0].split(/\s/).map(String);
  const MONTH_ARY = MONTH.split(''),
        DAY_ARY   = DAY.split(''),
        NEW_ARY   = MONTH_ARY.concat(DAY_ARY);
  const RESULT = NEW_ARY.filter((elem) => { return elem === NEW_ARY[0]; })
  NEW_ARY.length === RESULT.length ? console.log('Yes') : console.log('No');
});