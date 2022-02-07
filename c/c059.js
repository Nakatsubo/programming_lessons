// c059
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
  let resultArr = [0, 0, 0, 0];
  for (let i = 0; i < COUNT; i += 1) {
    let inputNum = INPUTS[i + 1].split('').map(Number);
    for (let j = 0; j < inputNum.length; j += 1) {
      if (inputNum[j] === 1) resultArr[j] += 1;
    }
  }
  for (let i = 0; i < resultArr.length; i += 1) {
    resultArr[i] % 2 === 1 ? resultArr[i] = 1 : resultArr[i] = 0;
  }
  console.log(resultArr.join(''));
});