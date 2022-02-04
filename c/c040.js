// c040
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
  let getLEValue  = [],
      getGEValue  = [];
  for (let i = 0; i < COUNT; i += 1) {
    let tmp = lines[i + 1].split(/\s/);
    if (tmp[0] === 'le') getGEValue.push(tmp[1]);
    else if (tmp[0] === 'ge') getLEValue.push(tmp[1]);
  }
  const maxValueFunc = (a, b) => { return Math.max(a, b); }
  const minValueFunc = (a, b) => { return Math.min(a, b); }
  let lowValue   = getLEValue.reduce(maxValueFunc);
  let heighValue = getGEValue.reduce(minValueFunc);
  String(lowValue).length !== 3 ? lowValue = String(lowValue) : lowValue =  `${String(lowValue)}.0`;
  String(heighValue).length !== 3 ? heighValue = String(heighValue) : heighValue =  `${String(heighValue)}.0`;
  console.log(`${lowValue} ${heighValue}`);
});