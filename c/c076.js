// c076
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
        [DAYTIME, NIGHT, MIDNIGHT] = INPUTS[0].split(/\s/).map(Number),
        DAYS = Number(INPUTS[1]);
  let payRoll = 0;
  for (let i = 0; i < DAYS; i += 1) {
    let [tmpStartTime, tmpEndTime] = INPUTS[i + 2].split(/\s/).map(Number);
    let daytimeWorkTime  = 0,
        nightWorkTime    = 0,
        midnightWorkTime = 0;
    if (tmpStartTime >= 9) {
      if (tmpStartTime < 17 && tmpEndTime > 9 && tmpEndTime <= 17) {
        daytimeWorkTime = tmpEndTime - tmpStartTime;
      } else if (tmpStartTime < 17 && tmpEndTime > 17 && tmpEndTime <= 22) {
        daytimeWorkTime = 17 - tmpStartTime;
        nightWorkTime = tmpEndTime - 17;
      }
      else if (tmpStartTime < 17 && tmpEndTime > 22 && tmpStartTime <= 23) {
        daytimeWorkTime = 17 - tmpStartTime;
        nightWorkTime = 5;
        midnightWorkTime = 1;
      }
    }
    if (tmpStartTime < 9) {
      if (tmpEndTime <= 9) {
        midnightWorkTime = tmpEndTime - tmpStartTime;
      }
      else if (tmpEndTime > 9 && tmpEndTime <= 17) {
        midnightWorkTime = 9 - tmpStartTime;
        daytimeWorkTime = tmpEndTime - 9;
      }
      else if (tmpEndTime > 17 && tmpEndTime <= 22) {
        midnightWorkTime = 9 - tmpStartTime;
        daytimeWorkTime = 8;
        nightWorkTime = tmpEndTime - 17;
      }
      else if (tmpEndTime > 22 && tmpEndTime <= 23) {
        midnightWorkTime = 9 - tmpStartTime;
        daytimeWorkTime = 8;
        nightWorkTime = 5;
        midnightWorkTime += 1;
      }
    }
    if (tmpStartTime >= 17) {
      if (tmpEndTime > 17 && tmpEndTime <= 22) {
        nightWorkTime = tmpEndTime - tmpStartTime;
      }
      else if (tmpEndTime > 22 && tmpEndTime <= 23) {
        nightWorkTime = 22 - tmpStartTime;
        midnightWorkTime = 1;
      }
    }
    if (tmpStartTime >= 22 && tmpEndTime <= 23) {
      midnightWorkTime = 1;
    }
    payRoll += DAYTIME * daytimeWorkTime + NIGHT * nightWorkTime + MIDNIGHT * midnightWorkTime;
  }
  console.log(payRoll);
});