// d133
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
  const INPUTS       = lines,
        BUGET        = Number(INPUTS[0]),
        BEFORE_PRICE = Number(INPUTS[1]),
        AFTER_PRICE  = Number(INPUTS[2]);
  const COUNT = Math.floor(BUGET / BEFORE_PRICE);
  const BUGET_OVERJOYED = Math.floor(BUGET % BEFORE_PRICE);
  console.log((AFTER_PRICE * COUNT) - BUGET + BUGET_OVERJOYED);
});