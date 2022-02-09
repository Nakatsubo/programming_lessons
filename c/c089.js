// c089
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
        [HEIGHT, WIDTH] = INPUTS[0].split(/\s/).map(Number);
  let boardArr      = [],
      scoreArr      = [],
      totalScoreArr = [],
      totalBoardArr = [];
      totalScore    = 0;
  for (let i = 0; i < HEIGHT; i += 1) { scoreArr.push(INPUTS[i + 1].split('')); }
  for (let i = 0; i < scoreArr.length; i += 1) { totalScoreArr = totalScoreArr.concat(scoreArr[i]); }
  for (let i = 0; i < HEIGHT; i += 1) { boardArr.push(INPUTS[i + 1 + HEIGHT].split(/\s/)); }
  for (let i = 0; i < boardArr.length; i += 1) { totalBoardArr = totalBoardArr.concat(boardArr[i]); }
  for (let i = 0; i < totalBoardArr.length; i += 1) {
    if (totalScoreArr[i] === 'o') totalScore += Number(totalBoardArr[i]);
  }
  console.log(totalScore);
});