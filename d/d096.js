// d096
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
  const STRING = String(lines[0]);
  STRING.includes('I') === true || STRING.includes('l') === true || STRING.includes('i') === true 
  ? console.log('caution') : console.log(STRING); 
});