// c093
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
  const [BOB, ALICE] = lines[0].split(/\s/).map(String);
  let bobScoreArr, aliceScoreArr;
  BOB === 100 ? bobScoreArr = [10, 0] : bobScoreArr = BOB.split('').map(Number);
  ALICE === 100 ? aliceScoreArr = [10, 0] : aliceScoreArr = ALICE.split('').map(Number);
  const REDUCER = (a, b) => a + b;
        BOB_SCORE   = String(bobScoreArr.reduce(REDUCER)).split('').map(Number);
        ALICE_SCORE = String(aliceScoreArr.reduce(REDUCER)).split('').map(Number);
  if (BOB_SCORE.length > 1) BOB_SCORE.shift();
  if (ALICE_SCORE.length > 1) ALICE_SCORE.shift();
  if (BOB_SCORE > ALICE_SCORE) console.log('Bob');
  else if (BOB_SCORE < ALICE_SCORE) console.log('Alice');
  else console.log('Draw');
});