// d146
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
  let stringAry = lines[0];
  const RESULT = stringAry.replace(/a/g, '')
                          .replace(/e/g, '')
                          .replace(/i/g, '')
                          .replace(/o/g, '')
                          .replace(/u/g, '');
  console.log(RESULT);
});