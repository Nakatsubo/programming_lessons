// c087
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
  const INPUT_NUMBER = String(lines[0]);
  let numberArr = INPUT_NUMBER.split(''),
      reverseNumberArr = numberArr.slice().reverse();
  let number = String(numberArr.join('')),
      reverseNumber = String(reverseNumberArr.join(''));
  while (number !== reverseNumber) {
    reverseNumber = number.split('').reverse().join('');
    number = String(Number(number) + Number(reverseNumber));
    reverseNumber = number.split('').reverse().join('');
    if (number === reverseNumber) break;
  }
  console.log(number);
});