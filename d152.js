// d152
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
        ANSWER = INPUTS[0].split('').map(String),
        COUNT  = Number(INPUTS[1]);
  const RESULT = ANSWER.filter((elem) => {
    return elem === 'R';
  })
  RESULT.length >= COUNT ? console.log('Yes') : console.log('No');
});