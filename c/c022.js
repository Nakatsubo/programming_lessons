// c022
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
        COUNT  = INPUTS[0];
  let maxArray = [],
      minArray = [],
      hajimene = 0,
      owarine  = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = INPUTS[i + 1].split(/\s/).map(Number);
    maxArray.push(Math.max(...tmp));
    minArray.push(Math.min(...tmp));
    if (i === 0) { hajimene = tmp[0]; }
    if (i === COUNT - 1) { owarine = tmp[1]; }
  }
  let takane = maxArray.reduce((a, b) => { return Math.max(a, b); });
  let yasune = minArray.reduce((a, b) => { return Math.min(a, b); });
  console.log(`${hajimene} ${owarine} ${takane} ${yasune}`);
});