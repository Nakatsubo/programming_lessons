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
  let num = lines[0].split(/\s/).map(Number)
  let line = []
  let sum = num[0]
  for(let i=0;i<10;i++){
    line.push(sum)
    sum += num[1]
  }
  console.log(line.join(' '))
});