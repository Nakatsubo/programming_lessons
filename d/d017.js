// d017
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
  let line = lines
  const aryMax=(a, b)=>{return Math.max(a, b)}
  const aryMin=(a, b)=>{return Math.min(a, b)}
  // Math.max, Math.min でも取り出せるが、reduceを使う方が安全らしい
  console.log(line.reduce(aryMax))
  console.log(line.reduce(aryMin))
});