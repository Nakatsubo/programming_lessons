// d047
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
  const INPUTS = lines;
  for (let i = 0; i < INPUTS.length; i += 1) {
    let ranking;
    if (i === 0) ranking = 'Gold';
    else if (i === 1) ranking = 'Silver';
    else if (i === 2) ranking = 'Bronze';
    console.log(`${ranking} ${INPUTS[i]}`);
  }
});