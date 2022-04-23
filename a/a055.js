// a055
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
  const DATA = lines,
        [HEIGHT, WIDTH] = DATA[0].split(/\s/).map(Number);

  let gridArr = [];
  for (let i = 0; i < HEIGHT; i += 1) {
    gridArr.push(DATA[i + 1].split('').map(String));
  }

  let [initY, initX] = [0, 0];
  for (let i = 0; i < HEIGHT; i += 1) {
    for (let j = 0; j < WIDTH; j += 1) {
      if (gridArr[i][j] === 'S') {
        initY = i;
        initX = j;
      }
    }
  }
  let myPosition = [];
  myPosition.push([initY, initX]);

  while (myPosition.length) {
    let [y, x] = [myPosition[0][0], myPosition[0][1]];
    myPosition.shift();
    if (y > 0 && gridArr[y - 1][x] === '.') {
      gridArr[y - 1][x] = 'S';
      myPosition.push([y - 1, x]);
    }
    if (y < HEIGHT - 1 && gridArr[y + 1][x] === '.') {
      gridArr[y + 1][x] = 'S';
      myPosition.push([y + 1, x]);
    }
    if (x > 0 && gridArr[y][x - 1] === '.') {
      gridArr[y][x - 1] = 'S';
      myPosition.push([y, x - 1]);
    }
    if (x < WIDTH - 1 && gridArr[y][x + 1] === '.') {
      gridArr[y][x + 1] = 'S';
      myPosition.push([y, x + 1]);
    }
  }

  let isResult = false;
  for (let i = 0; i < HEIGHT; i += 1) {
    for (let j = 0; j < WIDTH; j += 1) {
      if (gridArr[0][j].includes('S') || gridArr[i][0].includes('S') || gridArr[HEIGHT - 1][j].includes('S') || gridArr[i][WIDTH - 1].includes('S')) isResult = true;
    }
  }
  isResult === true ? console.log('YES') : console.log('NO');

});