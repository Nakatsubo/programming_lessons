// d051
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
  const INPUTS = lines[0].split(/\s/).map(String);
  const WINTER = INPUTS.filter((elem) => { return elem === 'W'; } ).length,
        JUDGE  = INPUTS.length / 2;
  JUDGE <= WINTER ? console.log('OK') : console.log('NG');
});