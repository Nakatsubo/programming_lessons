// d196
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
        COUNT  = Number(INPUTS[0]);
  let priceList = []
  for (let i = 0; i < COUNT; i += 1) { priceList.push(Number(INPUTS[i + 1])); }
  let reducer = (a, b) => a + b;
  console.log(priceList.reduce(reducer));
});