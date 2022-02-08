// c074
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
  const INPUTS = lines,
        [HEIGHT, WIDTH, NEW_WIDTH] = INPUTS[0].split(/\s/).map(Number);
  let strings = '';
  for (let i = 0; i < HEIGHT; i += 1) strings += INPUTS[i + 1];
  while (strings.length > 0) {
    console.log(strings.slice(0, NEW_WIDTH));
    strings = strings.slice(NEW_WIDTH);
  }
});