// d131
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
  const CODE_ARY = lines[0].split('').map(Number);
  let resutAry = [];
  for (let i = 0; i < CODE_ARY.length; i += 1) {
    if (CODE_ARY[i] === 0) resutAry.push('C');
    else if (CODE_ARY[i] === 1) resutAry.push('A');
    else if (CODE_ARY[i] === 2) resutAry.push('B');
  }
  console.log(resutAry.join(''));
});