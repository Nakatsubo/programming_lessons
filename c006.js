// c006
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
  const INPUTS     = lines,
        INPUT      = INPUTS[0].split(/\s/).map(Number),
        ITEM       = INPUT[0],
        USER       = INPUT[1],
        RANK       = INPUT[2],
        ITEM_POINT = INPUTS[1].split(/\s/).map(Number);
  const POINTS_LIST = [];
  for (let i = 0; i < USER; i += 1) {
    let tmp = i + 2;
    const ITEM_QUANTITY = INPUTS[tmp].split(/\s/).map(Number);
    let sumPoint = 0;
    for (let j = 0; j < ITEM_QUANTITY.length; j += 1) {
      let tmp = ITEM_POINT[j] * ITEM_QUANTITY[j]
      sumPoint += tmp;
    }
    POINTS_LIST.push(Math.round(sumPoint))
  }
  const RANKER_TMP = POINTS_LIST.sort((a,b) => { return (a < b) ? 1 : -1 });
  const RANKER = [];
  for (let i = 0; i < RANK; i += 1) { RANKER.push(RANKER_TMP[i]); }
  console.log(RANKER.join('\n'));
});