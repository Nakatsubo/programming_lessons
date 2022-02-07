// c044
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
        COUNT  = INPUTS[0];
        HANDS_ARR = ['rock', 'scissors', 'paper'];
  let counterArr = [...Array(3).keys()].map(_ => 0);
  for (let i = 0; i < COUNT; i += 1) {
    let tmpHand = String(INPUTS[i + 1]);
    if (tmpHand === HANDS_ARR[0]) counterArr[0] += 1;
    else if (tmpHand === HANDS_ARR[1]) counterArr[1] += 1;
    else if (tmpHand === HANDS_ARR[2]) counterArr[2] += 1;
  }
  const COUNTER_ARY_ZERO_COUNT = counterArr.filter((el) => { return el === 0; }).length;
  if (COUNTER_ARY_ZERO_COUNT === 0) console.log('draw');
  else if (COUNTER_ARY_ZERO_COUNT === 2) console.log('draw');
  else if (counterArr[0] === 0) console.log(HANDS_ARR[1]);
  else if (counterArr[1] === 0) console.log(HANDS_ARR[2]);
  else if (counterArr[2] === 0) console.log(HANDS_ARR[0]);
});