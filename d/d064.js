// d064
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
  const STRING = String(lines[0]),
        REGEX = /False/g;
  console.log(STRING.replace(REGEX, 'True'));
});