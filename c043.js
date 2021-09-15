// c043
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
  const INPUT = lines;
  const ITME_COUNT = INPUT[0];
  const ITME_TMP = INPUT[1].split(/\s/).map(Number);
  const ITEM_COUNT = {};
  for (let i = 0; i < ITME_COUNT; i += 1) {
    let tmp = ITME_TMP[i];
    ITEM_COUNT[tmp] = ITEM_COUNT[tmp] ? ITEM_COUNT[tmp] + 1 : 1;
  }
  console.log(ITEM_COUNT);
});