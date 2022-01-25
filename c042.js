// c042
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
        COUNT  = Number(INPUTS[0]);
  let scoresAry = [],
      resultAry = [];
  for (let i = 0; i < INPUTS.length - 1; i += 1) {
    let tmpI = INPUTS[i + 1].split(/\s/).map(Number);
    scoresAry.push(tmpI);
    let tmpJ = [];
    for (let j = 0; j < COUNT; j += 1) {
      tmpJ.push('-');
    }
    resultAry.push(tmpJ);
  }
  for (let i = 0; i < INPUTS.length - 1; i += 1) {
    let winner = scoresAry[i][0] - 1,
        loser  = scoresAry[i][1] - 1;
    resultAry[winner][loser] = 'W';
    resultAry[loser][winner] = 'L';
  }
  for (let i = 0; i < COUNT; i += 1) {
    console.log(resultAry[i].join(' '));
  }
});