// c064
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
  const INPUTS = lines;
        [ORDER_COUNT, MEMBER_COUNT] = INPUTS[0].split(/\s/).map(Number);
  let ordersArr = [];
  for (let i = 0; i < ORDER_COUNT; i += 1) { ordersArr.push(INPUTS[i + 1]); }
  for (let i = 0; i < MEMBER_COUNT; i += 1) {
    let memberOrdersArr = INPUTS[i + ORDER_COUNT + 1].split(/\s/).map(Number);
    let totalCalorie = 0;
    for (let j = 0; j < ORDER_COUNT; j += 1) {
      let gramPerCalorie = ordersArr[j] / 100;
      let calorie = Math.trunc(memberOrdersArr[j] * gramPerCalorie);
      totalCalorie += calorie;
    }
    console.log(totalCalorie);
  }
});