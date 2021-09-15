// c031
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
  const INPUT = lines[0].split(/\s/).map(Number);
  const HOLDAYS = INPUT[0];
  const PERIODS = INPUT[1];
  const TOTAL_HOLDAYS = [];
  const TOTAL_WEATHERS = [];
  for (let i = 1; i < lines.length; i += 1) {
    let tmp =  lines[i].split(/\s/).map(Number)
    TOTAL_HOLDAYS.push(tmp[0])
    TOTAL_WEATHERS.push(tmp[1])
  }
  const COMPARSION_WEATHERS = [];
  const COMPARSION_WEATHERS_RANGE = HOLDAYS - PERIODS + 1;
  for (let i = 0; i < COMPARSION_WEATHERS_RANGE; i += 1) {
    let tmp = 0;
    for (let j = 0; j < PERIODS; j += 1) {
      tmp += TOTAL_WEATHERS[i+j];
    }
    COMPARSION_WEATHERS.push(tmp);
  }
  const MIN_WEATHER = COMPARSION_WEATHERS.reduce((x,y) => { return Math.min(x, y) });
  const MIN_WEATHER_INDEX = COMPARSION_WEATHERS.indexOf(MIN_WEATHER);
  const START_HOLIDAY = TOTAL_HOLDAYS[0] + MIN_WEATHER_INDEX;
  const END_HOLIDAY = TOTAL_HOLDAYS[0] + MIN_WEATHER_INDEX + PERIODS - 1;
  console.log(`${START_HOLIDAY} ${END_HOLIDAY}`);
});