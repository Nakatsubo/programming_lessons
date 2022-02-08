// c072
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
        [INI_ATK, INI_DEF, INI_AGI] = INPUTS[0].split(/\s/).map(Number);
        COUNT = Number(INPUTS[1]);
  let resultArr = [];
  for (let i = 0; i < COUNT; i += 1) {
    let conditionsArr = INPUTS[i + 2].split(/\s/);
    if (INI_ATK >= conditionsArr[1]  && INI_ATK <= conditionsArr[2] && INI_DEF >= conditionsArr[3] && INI_DEF <= conditionsArr[4] && INI_AGI >= conditionsArr[5] && INI_AGI <= conditionsArr[6]) resultArr.push(conditionsArr[0]);
  }
  resultArr.length === 0 ? console.log('no evolution') : console.log(resultArr.join('\n'));
});