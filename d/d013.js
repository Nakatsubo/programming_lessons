// d013
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
  let line = lines[0].split(/\s/).map(Number)
  let result1 = Math.floor(line[0]/line[1])
  let result2 = Math.floor(line[0]%line[1])
  console.log(result1+' '+result2)
});