// d139
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
        HANDS  = lines[1].split(/\s/).map(String);
  let gCount = 0,
      pCount = 0;
  for (let i = 0; i < COUNT; i += 1) {
    HANDS[i] === 'G' ? gCount += 1 : pCount += 1;
  }
  if (gCount === pCount) console.log('Draw');
  else if (gCount > pCount) console.log('P');
  else if (gCount < pCount) console.log('G');
});