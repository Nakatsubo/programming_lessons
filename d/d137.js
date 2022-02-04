// d137
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
  const RESULT = STRING_ARY.filter((elem) => { return elem === 'y'; }).length;
  console.log(RESULT);
});