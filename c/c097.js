// c097
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
        [COUNT, NUMBER_X, NUMBER_Y] = INPUTS[0].split(/\s/).map(Number);
  for (let i = 0; i < COUNT; i += 1) {
    let tmpEntryNumber = i + 1;
    if (tmpEntryNumber % NUMBER_X === 0 && tmpEntryNumber % NUMBER_Y === 0) console.log('AB');
    else if (tmpEntryNumber % NUMBER_X === 0) console.log('A');
    else if (tmpEntryNumber % NUMBER_Y === 0) console.log('B');
    else console.log('N');
  }
});