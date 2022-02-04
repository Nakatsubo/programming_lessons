// c023
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
  const HITS  = lines[0].split(/\s/).map(Number),
        COUNT = Number(lines[1]);
  for (let i = 0; i < COUNT; i += 1) {
    let tmpLotte = lines[i + 2].split(/\s/).map(Number),
        tmpHits  = [];
    for (let j = 0; j < tmpLotte.length; j += 1) {
      if (tmpLotte.includes(HITS[j]) === true) { tmpHits.push(HITS[j]); }
    }
    console.log(tmpHits.length);
  }
});