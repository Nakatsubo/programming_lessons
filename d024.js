// d024
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
　let line = lines.map(Number)
  let reducer = (a,b)=>a+b
  let sum = line.reduce(reducer)
  console.log(180 - sum)
});