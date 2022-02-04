// d082
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
        X = INPUTS[0].split('').map(String),
        Y = INPUTS[1].split('').map(String);
  X.slice(- 1)[0] === Y[0] && X.slice(- 1)[0] !== 'n' && Y.slice(- 1)[0] !== 'n'? console.log('OK') : console.log('NG');
});