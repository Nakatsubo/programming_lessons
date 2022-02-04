// d059
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
  let resultAry = lines[0].split(/\s/).map(String);
  if (resultAry[0] === 'J' && resultAry[1] === 'J') resultAry[1] = 'Q';
  console.log(resultAry.join(' '));
});