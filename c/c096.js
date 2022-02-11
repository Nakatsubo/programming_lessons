// c096
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
        COUNT  = Number(lines[0]);

  const getIsDuplicate = (arrA, arrB) => {
    return [...arrA, ...arrB].filter(el => arrA.includes(el) && arrB.includes(el)).length > 0
  }

  let result = 'OK';
  for (let i = 0; i < COUNT - 1; i += 1) {
    let tmpA = INPUTS[i + 1].split(/\s/).map(Number),
        tmpB = INPUTS[i + 2].split(/\s/).map(Number);
    let tmpHolidayAArr = [],
        tmpHolidayBArr = [];
    for (let j = tmpA[0]; j < tmpA[1]; j += 1) { tmpHolidayAArr.push(j); }
    for (let j = tmpB[0]; j < tmpB[1]; j += 1) { tmpHolidayBArr.push(j); }
    if (getIsDuplicate(tmpHolidayAArr, tmpHolidayBArr) === false) {
      result = 'NG';
      break;
    }
  }
  console.log(result);
});