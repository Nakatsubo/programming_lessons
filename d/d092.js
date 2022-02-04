// d092
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
        [X_X, X_Y, X_PRICE] = INPUTS[0].split(/\s/).map(Number),
        [Y_X, Y_Y, Y_PRICE] = INPUTS[1].split(/\s/).map(Number);
  const X_COST = X_PRICE / (X_X * X_Y),
        Y_COST = Y_PRICE / (Y_X * Y_Y);
  if (X_COST > Y_COST) console.log(INPUTS[1]);
  else if (X_COST < Y_COST) console.log(INPUTS[0]);
  else console.log('DRAW');
});