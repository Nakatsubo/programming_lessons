// c085
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
        INPUT_NUMBER = INPUTS[0].split(/\s/),
        INPUT_STRING = INPUTS[1].split('');
  const ALPABET_ARR = [...Array(26)].map((_, b) => (10 + b).toString(36));
  let keyDurableArr = [];
  for (let i = 0; i < 26; i += 1) { keyDurableArr.push([ALPABET_ARR[i], INPUT_NUMBER[i]]); }
  let result = [];
  for (let i = 0; i < INPUT_STRING.length; i += 1) {
    let target = INPUT_STRING[i];
    let tmptarget = keyDurableArr.filter((el) => { return el[0] === target; });
    if (tmptarget[0][1] > 0) {
      result.push(tmptarget[0][0]);
      tmptarget[0][1] -= 1;
    }
  }
  console.log(result.join(''));
});