// d039
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
        A      = Number(INPUTS[0]),
        B      = Number(INPUTS[1]),
        C      = Number(INPUTS[2]);
  A === B  && B === C && C === A ? console.log('YES') : console.log('NO');
});