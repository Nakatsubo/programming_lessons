// d161
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
  const INPUTS    = lines,
        CAPACITY  = Number(INPUTS[0]);
  let result = 0;
  for (let i = 0; i < INPUTS.length - 1; i += 1) {
    if (result < CAPACITY) result += Number(INPUTS[i + 1]);
    else break;
  }    
  result >= CAPACITY ? console.log(CAPACITY) : console.log(result);
});