// d165
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
  const INPUT = lines[0].split('');
  const tmp = INPUT.filter((x,i,s) => s.indexOf(x) !== s.lastIndexOf(x));
  if (tmp.length === 0) {
    console.log('OK');
  } else {
    console.log('NG');
  }
});