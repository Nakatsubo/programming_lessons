// c010
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
  const INPUTS  = lines,
        INPUT   = INPUTS[0].split(/\s/).map(Number),
        POINT_A = INPUT[0],
        POINT_B = INPUT[1],
        RADIUS  = INPUT[2],
        COUNT   = Number(INPUTS[1]);
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = INPUTS[i+2].split(/\s/).map(Number);
    Math.pow((tmp[0] - POINT_A), 2) + Math.pow((tmp[1] - POINT_B), 2) >= Math.pow(RADIUS, 2) ? console.log('silent') : console.log('noisy');
  }
});