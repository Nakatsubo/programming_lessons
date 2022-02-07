// c048
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
  let [price, discount] = lines[0].split(/\s/).map(Number);
  let totalPrice = price;
  while (price > 1) {
    price = Math.trunc(price - (price * (discount / 100)));
    totalPrice += price;
  }
  console.log(totalPrice);
});