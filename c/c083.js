// c083
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
        [COUNT, UNIT] = INPUTS[0].split(/\s/).map(Number);
  let periodsArr = [];
  for (let i = 0; i < COUNT; i += 1) { periodsArr.push(Number(INPUTS[i + 1])); }
  let maxPeriod = periodsArr.reduce((a, b) => { return Math.max(a, b); });
  for (let i = 0; i < COUNT; i += 1) {
    let tmpValue = Number(periodsArr[i]);
    let maxValue     = '.'.repeat(maxPeriod / UNIT),
        thisValue    = '*'.repeat(tmpValue / UNIT),
        replaceValue = '.'.repeat(tmpValue / UNIT);
    let result = maxValue.replace(replaceValue, thisValue);
    console.log(`${i + 1}:${result}`);
  }
});