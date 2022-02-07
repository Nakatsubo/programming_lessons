// c044
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
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
  let handsArr = [];
  for (let i = 0; i < COUNT; i += 1) { handsArr.push(INPUTS[i + 1]); }
  const ROCK_COUNT     = (handsArr.filter((el) => { return el === 'rock'; })).length,
        SCISSORS_COUNT = (handsArr.filter((el) => { return el === 'scissors'; })).length,
        PAPER_COUNT    = (handsArr.filter((el) => { return el === 'paper'; })).length;
  // グーチョキパーぜんぶ
  if (ROCK_COUNT > 0 && SCISSORS_COUNT > 0 && PAPER_COUNT > 0) console.log('draw');
  // グーのみチョキのみパーのみ
  else if (ROCK_COUNT === COUNT || SCISSORS_COUNT === COUNT || PAPER_COUNT === COUNT) console.log('draw');
  // グーなし
  else if (ROCK_COUNT === 0) console.log('scissors');
  // チョキなし
  else if (SCISSORS_COUNT === 0) console.log('paper');
  // パーなし
  else if (PAPER_COUNT === 0) console.log('rock');
});