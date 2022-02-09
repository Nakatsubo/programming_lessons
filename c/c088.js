// c088
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
  const INPUTS         = lines,
        // TOOL_COUNT     = Number(INPUTS[0]),
        PRICE_ARR      = INPUTS[1].split(/\s/).map(Number),
        [MONEY, COUNT] = INPUTS[2].split(/\s/).map(Number);
  let balance = MONEY;
  for (let i = 0; i < COUNT; i += 1) {
    let [itemNumber, itemQuantity] = INPUTS[i + 3].split(/\s/).map(Number);
    let purchaseValue = PRICE_ARR[itemNumber - 1] * itemQuantity;
    if (balance >= purchaseValue) balance -= purchaseValue;
  }
  console.log(balance);
});