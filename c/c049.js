// c049
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
        COUNT  = Number(lines[0]);
  let setfloorArr = [1];
  for (let i = 0; i < COUNT; i += 1) { setfloorArr.push(Number(INPUTS[i + 1])); }
  let counter = 0;
  for (let i = 0; i < setfloorArr.length - 1; i += 1) { counter += Math.abs(setfloorArr[i + 1] - setfloorArr[i]); }
  console.log(counter);
});