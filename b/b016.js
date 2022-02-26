// b016
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
        [WIDTH, HEIGHT, COUNT] = INPUTS[0].split(/\s/).map(Number);

  let [xPosition, yPosition] = INPUTS[1].split(/\s/).map(Number);
  for (let i = 0; i < COUNT; i += 1) {
    let [direction, step] = INPUTS[i + 2].split(/\s/);
    if (direction === 'U') {
      if (yPosition + Number(step) % HEIGHT < HEIGHT) yPosition += Number(step) % HEIGHT;
      else yPosition += Number(step) % HEIGHT - HEIGHT;
    } else if (direction === 'D') {
      if (yPosition - Number(step) % HEIGHT >= 0) yPosition -= Number(step) % HEIGHT;
      else yPosition = HEIGHT - Math.abs(yPosition - Number(step) % HEIGHT);
    } else if (direction === 'R') {
      if (xPosition + Number(step) % WIDTH < WIDTH) xPosition += Number(step) % WIDTH;
      else xPosition += Number(step) % WIDTH - WIDTH;
    } else if (direction === 'L') {
      if (xPosition - Number(step) % WIDTH >= 0) xPosition -= Number(step) % WIDTH;
      else xPosition = WIDTH - Math.abs(xPosition - Number(step) % WIDTH);
    }
  }

  console.log(`${xPosition} ${yPosition}`);
});