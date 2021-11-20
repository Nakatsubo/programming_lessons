// d184
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
        COUNT  = Number(INPUTS[0]),
        STRING = String(INPUTS[1]);
  let newString = STRING.split('');
  for (let i = 0; i < COUNT; i += 1) {
    console.log(newString[i]);
  }
});