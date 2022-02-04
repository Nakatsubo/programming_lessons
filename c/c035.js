// c035
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
  let counter = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = INPUTS[i + 1].split(/\s/);
    let tmpSystem      = tmp[0],
        tmpTotalScore  = 0,
        tmpSystemScore = 0;
    for (let j = 1; j <= 5; j += 1) { tmpTotalScore += Number(tmp[j]); }
    tmpSystem === 's' ? tmpSystemScore = Number(tmp[2]) + Number(tmp[3]) : tmpSystemScore = Number(tmp[4]) + Number(tmp[5]);
    if (tmpTotalScore >= 350 && tmpSystemScore >= 160) { counter += 1; }
  }
  console.log(counter);
});