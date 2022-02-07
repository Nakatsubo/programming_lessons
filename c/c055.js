// c055.js
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
  const INPUTS        = lines,
        COUNT         = Number(INPUTS[0]),
        VALIDATE_TEXT = String(INPUTS[1]);
  let resultArr = [];
  for (let i = 0; i < COUNT; i += 1) {
    if (INPUTS[i + 2].includes(VALIDATE_TEXT) === true) resultArr.push(String(INPUTS[i + 2]));
  }
  resultArr.length !== 0 ? console.log(resultArr.join('\n')) : console.log('None');
});