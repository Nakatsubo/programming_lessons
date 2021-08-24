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
  let line = []
  for(let i=1;i<lines.length;i++){line.push(lines[i])}
  line = line.join(',')
  console.log('Hello'+' '+line+'.')
});