// d134
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
  const STRING_ARY = lines[0].split('');
  let resultAry = [];
  for (let i = 0; i < STRING_ARY.length; i += 1) {
    if (resultAry.length === 10) resultAry.push('\n');
    resultAry.push(STRING_ARY[i]);
  }
  console.log(resultAry.join(''));
});