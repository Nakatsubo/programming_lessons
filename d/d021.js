// d021
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
  let str1 = lines[0]
  let str2 = lines[1]
  str1 !== str2 ? console.log('No') : console.log('Yes')
});