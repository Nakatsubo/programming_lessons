// c025
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
        POWER  = Number(INPUTS[0]),
        COUNT  = Number(INPUTS[1]);
  let hourCounter 　= 0,
      amountCounter = 0,
      actionCounter = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let [tmpHour, tmpTime, tmpAmount] = INPUTS[i + 2].split(/\s/).map(Number);
    if (tmpHour !== hourCounter) {
      actionCounter += Math.ceil(amountCounter / POWER);
      hourCounter = tmpHour;
      amountCounter = tmpAmount;
    } else {
      amountCounter += tmpAmount;
    }
  }
  console.log(actionCounter + Math.ceil(amountCounter / POWER));
});