// D002
process.stdin.resume();
process.stdin.setEncoding('utf8');
let lines = [];
let reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  let line = lines[0].split(/\s/).map(Number)
  if (line[0] === line[1]) {
    console.log('eq')
  } else if (line[0] > line[1]) {
    console.log(line[0])
  } else {
    console.log(line[1])
  } 
});