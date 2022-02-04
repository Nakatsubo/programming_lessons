// d003
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
  let num = lines[0]
  let line = []
  for(let i=1;i<=9;i++){line.push(num*i)}
  console.log(line.join(' '));
});