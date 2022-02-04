// c013
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
  const INPUTS      = lines,
        HATE_NUMBER = Number(INPUTS[0]),
        ROOM_COUNT  = Number(INPUTS[1]);
  let result = [];
  for (let i = 0; i < ROOM_COUNT; i += 1) {
    let tmp = lines[i+2];
    if (tmp.includes(HATE_NUMBER) === false) { result.push(tmp); }
  }
  result.length !== 0 ? console.log(result.join('\n')) : console.log('none');
});