// b010
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
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
        [PASSER_TEAM_NAME, PASSER_PLAYER_NUMBER] = INPUTS[0].split(/\s/),
        TEAM_A_POSITION_ARR = INPUTS[1].split(/\s/).map(Number),
        TEAM_B_POSITION_ARR = INPUTS[2].split(/\s/).map(Number);

  let passerNumber = Number(PASSER_PLAYER_NUMBER) - 1,
      passTeamPositionArr, enemyTeamPositonArr, maxNumber, minNumber;
  if (PASSER_TEAM_NAME === 'A') {
    passTeamPositionArr = TEAM_A_POSITION_ARR,
    enemyTeamPositonArr = TEAM_B_POSITION_ARR,
    maxNumber           = 110,
    minNumber           = 55;
  } else if (PASSER_TEAM_NAME === 'B') {
    passTeamPositionArr = TEAM_B_POSITION_ARR,
    enemyTeamPositonArr = TEAM_A_POSITION_ARR,
    maxNumber           = 55,
    minNumber           = 0;
  }

  let passerPosition          = passTeamPositionArr[passerNumber],
      newEnemyTeamPositionArr = enemyTeamPositonArr.sort((a, b) => a - b),
      counter                 = 0;
  for (let i = 0; i < passTeamPositionArr.length; i += 1) {
    if (PASSER_TEAM_NAME === 'A') {
      if (passTeamPositionArr[i] >= minNumber && passTeamPositionArr[i] <= maxNumber && passTeamPositionArr[i] > passerPosition && passTeamPositionArr[i] > newEnemyTeamPositionArr[9]) {
        console.log(i + 1);
        counter += 1;
      }
    } else if (PASSER_TEAM_NAME === 'B') {
      if (passTeamPositionArr[i] >= minNumber && passTeamPositionArr[i] <= maxNumber && passTeamPositionArr[i] < passerPosition && passTeamPositionArr[i] < newEnemyTeamPositionArr[1]) {
        console.log(i + 1);
        counter += 1;
      }
    }
  }
  if (counter === 0) console.log('None');

});