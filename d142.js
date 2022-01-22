// d142
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
  const [TREE_COUNT, COUNT, LIGHT_COUNT] = lines[0].split(/\s/).map(Number);
  let tmp = Math.floor(TREE_COUNT / COUNT);
  let overjoyed = Math.floor(TREE_COUNT % COUNT);
  if (overjoyed !== 0) tmp += 1;
  console.log(tmp * LIGHT_COUNT);
});