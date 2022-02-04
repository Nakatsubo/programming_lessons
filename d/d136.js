// d136
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
  const STRING_ARY = lines[0].split('').map(String);
  let result = [];
  for (let i = 0; i < 3; i += 1) { result.push(STRING_ARY[i]); }
  console.log(result.join(''));
});