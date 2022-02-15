// b006
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
        [O_Y, S, D] = INPUTS[0].split(/\s/).map(Number),
        [X, Y, A] = INPUTS[1].split(/\s/).map(Number);
  const G    = 9.8;
        R    = D * (Math.PI / 180),
        HIGH = Y + (A / 2),
        LOW  = Y - (A / 2);

  const RESULT = O_Y + (X * Math.tan(R)) - (G * Math.pow(X, 2)) / (2 * Math.pow(S, 2) * Math.pow(Math.cos(R), 2));
  let flag = -1;
  if (RESULT <= HIGH && RESULT >= Y) flag = RESULT - Y;
  else if (RESULT < Y && RESULT >= LOW) flag = Y - RESULT;

  flag >= 0 ? console.log(`Hit ${Math.round(flag * 10) / 10}`) : console.log('Miss');
});