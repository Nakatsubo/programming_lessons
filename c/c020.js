// c020
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
  const INPUT    = lines[0].split(/\s/).map(Number),
        STOCKING = INPUT[0],
        PURCHASE = INPUT[1],
        QUANTITY = INPUT[2];
  const PHASE01 = (STOCKING * 1000) - (STOCKING * 1000) * (PURCHASE / 100);
  const PHASE02 = (PHASE01) - (PHASE01) * (QUANTITY / 100);
  const RESULT = PHASE02 / 1000;
  console.log(RESULT);
});