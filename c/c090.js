// c090
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
  let tmpNumbersArr = lines[0].split('-');
  let numbersArr = [],
      result     = 0;
  for (let i = 0; i < tmpNumbersArr.length; i += 1) { numbersArr = numbersArr.concat(tmpNumbersArr[i].split('')); }
  for (let i = 0; i < numbersArr.length; i += 1) {
    numbersArr[i] === '0' ? result += 12 * 2 : result += (Number(numbersArr[i]) + 2) * 2;
  }
  console.log(result);
});