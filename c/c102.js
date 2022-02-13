// c102
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
        BAND_A_COUNT = Number(INPUTS[0]),
        BAND_B_COUNT = Number(INPUTS[BAND_A_COUNT + 1]);
  let bandAScheduleArr = [],
      bandBScheduleArr = [];
  for (let i = 0; i < BAND_A_COUNT; i += 1) {
    let tmpBandASchedule = Number(INPUTS[i + 1]);
    bandAScheduleArr.push(tmpBandASchedule);
  }
  for (let i = 0; i < BAND_B_COUNT; i += 1) {
    let tmpBandBSchedule = Number(INPUTS[i + 1 + BAND_A_COUNT + 1]);
    bandBScheduleArr.push(tmpBandBSchedule);
  }
  let flag = 0;
  for (let i = 1; i <= 31; i += 1) {
    if (bandAScheduleArr.includes(i) === true && bandBScheduleArr.includes(i) === true) {
      if(flag === 0) {
        console.log('A');
        flag += 1;
      } else {
        console.log('B');
        flag -= 1;
      }
    } else if (bandAScheduleArr.includes(i) === true && bandBScheduleArr.includes(i) === false) {
      console.log('A');
    } else if (bandAScheduleArr.includes(i) === false && bandBScheduleArr.includes(i) === true) {
      console.log('B');
    } else {
      console.log('x');
    }
  }
});