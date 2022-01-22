// d144
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
  const NUMBER_ARY = lines[0].split('').map(Number);
  let result  = 0,
      counter = 4;
  for (let i = 0; i < NUMBER_ARY.length; i += 1) {
    result += NUMBER_ARY[i] * (Math.pow(2, counter));
    counter === 0 ? counter = 1 : counter -= 1;
  }
  console.log(result);
});