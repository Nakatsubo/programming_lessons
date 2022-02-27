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
    step = Number(step);
    
    if (direction === 'U') {
      if (yPosition + step % HEIGHT < HEIGHT) yPosition += step % HEIGHT;
      else yPosition += step % HEIGHT - HEIGHT;
    } else if (direction === 'D') {
      if (yPosition - step % HEIGHT >= 0) yPosition -= step % HEIGHT;
      else yPosition = HEIGHT - Math.abs(yPosition - step % HEIGHT);
    } else if (direction === 'R') {
      if (xPosition + step % WIDTH < WIDTH) xPosition += step % WIDTH;
      else xPosition += step % WIDTH - WIDTH;
    } else if (direction === 'L') {
      if (xPosition - step % WIDTH >= 0) xPosition -= step % WIDTH;
      else xPosition = WIDTH - Math.abs(xPosition - step % WIDTH);
    }
  }

  console.log(`${xPosition} ${yPosition}`);
});