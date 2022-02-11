// c098
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
  let ballholdingArr = [];
  for (let i = 0; i < COUNT; i += 1) { ballholdingArr.push(Number(INPUTS[i + 1])); }
  const PASS_COUNT = INPUTS[COUNT + 1];
  for (let i = 0; i < PASS_COUNT; i += 1) {
    let passLog   = INPUTS[i + COUNT + 2].split(/\s/).map(Number),
        passer    = passLog[0] - 1,
        receiver  = passLog[1] - 1,
        ballCount = passLog[2];
    if (ballholdingArr[passer] <= ballCount) {
      ballholdingArr[receiver] += ballholdingArr[passer];
      ballholdingArr[passer] -= ballholdingArr[passer];
    } else {
      ballholdingArr[receiver] += ballCount;
      ballholdingArr[passer] -= ballCount;
    }
  }
  console.log(ballholdingArr.join('\n'));
});