// d072
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
  const [TOTAL_DATA, CAPACITY, PRICE] = lines[0].split(/\s/).map(Number);
  let result = 0;
  TOTAL_DATA % CAPACITY === 0 ? result += (TOTAL_DATA / CAPACITY) * PRICE : result += (Math.floor(TOTAL_DATA / CAPACITY) + 1) * PRICE;
  console.log(result);
});