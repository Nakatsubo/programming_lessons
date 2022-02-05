// c073
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
        DISATNCE = Number(INPUTS[0]),
        [USAGI_SPEED, HANDICAP_DISTANCE, HANDICAP_TIME] = INPUTS[1].split(/\s/).map(Number);
        KAME_SPEED = Number(INPUTS[2]);
  let usagiHandicapTime = 0;
  DISATNCE % HANDICAP_DISTANCE === 0 ? usagiHandicapTime = (Math.trunc(DISATNCE / HANDICAP_DISTANCE) - 1) * HANDICAP_TIME : usagiHandicapTime = (Math.trunc(DISATNCE / HANDICAP_DISTANCE)) * HANDICAP_TIME;
  const USAGI_TIME = DISATNCE * USAGI_SPEED + usagiHandicapTime,
        KAME_TIME  = DISATNCE * KAME_SPEED;
  if (USAGI_TIME < KAME_TIME) console.log('USAGI');
  else if (USAGI_TIME > KAME_TIME) console.log('KAME');
  else console.log('DRAW');
});