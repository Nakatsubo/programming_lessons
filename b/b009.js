// b009 -> 80% rate
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

  let hourCounter     = 10,
      miniteCounter   = 0,
      startTimeHour   = 0,
      startTimeMinite = 0,
      endTimeHour     = 0,
      endTimeMinite   = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let [userName, userTime] = INPUTS[i + 1].split(/\s/);

    startTimeMinite = miniteCounter;
    startTimeHour   = hourCounter;
    endTimeMinite   = startTimeMinite + Number(userTime);
    endTimeHour     = startTimeHour;
    if (endTimeMinite >= 60) {
      endTimeMinite -= 60;
      endTimeHour   += 1;
    }

    if (startTimeHour === 12 || endTimeHour === 12) {
      startTimeMinite -= 10;
      endTimeMinite   -= 10;
      if (startTimeMinite < 0) {
        startTimeMinite += 60;
        startTimeHour   -= 1;
      }
      if (endTimeMinite < 0) {
        endTimeMinite += 60;
        endTimeHour   -= 1;
      }
      startTimeHour += 1;
      endTimeHour += 1;
    }

    const getdoubleDigestNumer = (number) => {
      return ('0' + number).slice(-2);
    }
    console.log(`${startTimeHour}:${getdoubleDigestNumer(startTimeMinite)} - ${endTimeHour}:${getdoubleDigestNumer(endTimeMinite)} ${userName}`);

    miniteCounter = endTimeMinite + 10;
    hourCounter   = endTimeHour;
    if (miniteCounter >= 60) {
      miniteCounter -= 60;
      hourCounter   += 1;
    }
  }
        
});