// d006
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
  let line = lines[0].split(/\s/)
  let result
  if (line[1] === 'cm') {
    result = line[0] * 10
  } else if (line[1] === 'm') {
    result = line[0] * 100 * 10
  } else {
    result = line[0] * 1000 * 100 * 10
  }
  console.log(result);
});