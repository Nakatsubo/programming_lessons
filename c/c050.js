// c050
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
  const [START_PRICE, BUDGET_A, BUDGET_B] = lines[0].split(/\s/).map(Number);
  let lastPrice = START_PRICE;
  while (true) {
    if (BUDGET_A >= lastPrice + 10) {
      lastPrice += 10;
    } else {
      console.log(`B ${lastPrice}`);
      break;
    }
    if (BUDGET_B >= lastPrice + 1000) {
      lastPrice += 1000;
    } else {
      console.log(`A ${lastPrice}`);
      break;
    }
  }
});