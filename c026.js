// c026
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
        [COUNT, STANDARD_VALUE, ALLOWABLE_EROOR] = INPUTS[0].split(/\s/).map(Number);
  let carrotsWeight = 0,
      carrotsIndex  = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let [tmpWeight, tmpSuger] = INPUTS[i + 1].split(/\s/).map(Number);
    if (STANDARD_VALUE - ALLOWABLE_EROOR <= tmpSuger && STANDARD_VALUE + ALLOWABLE_EROOR >= tmpSuger) {
      if (carrotsWeight < tmpWeight) {
        carrotsWeight = tmpWeight;
        carrotsIndex = i + 1;
      }
    }
  }
  carrotsWeight > 0 ? console.log(carrotsIndex) : console.log('not found');
});