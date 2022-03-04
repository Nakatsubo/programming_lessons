// b019
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
        [N, K] = INPUTS[0].split(/\s/).map(Number);
  
  const blockCount = Math.trunc(N / K);

  let originalPixelArr = [];
  for (let i = 0; i < N; i += 1) {
    originalPixelArr.push(INPUTS[i + 1].split(/\s/).map(Number));
  }

  let calcRowPixelArr = [];
  for (let i = 0; i < N; i += 1) {
    let tmpOriginalPixelArr = originalPixelArr[i];
        counter   = 0,
        pixelArr  = [];
    for (let j = 0; j < tmpOriginalPixelArr.length; j += 1) {
      counter += tmpOriginalPixelArr[j];
      if ((j + 1) % K === 0) {
        pixelArr.push(counter);
        counter = 0;
      }
    }
    calcRowPixelArr.push(pixelArr);
  }

  let calcTotalPixelArr = [];
  for (let i = 0; i < N; i += K) {
    for (let j = 0; j < blockCount; j += 1) {
      let counter = 0;
      for (let k = 0; k < K; k += 1) {
        counter += calcRowPixelArr[i + k][j];
      }
      counter = Math.trunc(counter / (Math.pow(K, 2)));
      calcTotalPixelArr.push(counter);
    }
  }

  let start = 0,
      end   = blockCount;
  for (let i = 0; i < blockCount; i += 1) {
    let resultRow = calcTotalPixelArr.splice(start, end);
    console.log(resultRow.join(' '));
  }
});