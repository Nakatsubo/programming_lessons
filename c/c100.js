// c100
// run time error
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
        [MUSIC_LIST, TIME_MINUTE, TIME_SECOND] = INPUTS[0].split(/\s/).map(Number);
  let playableTime = TIME_MINUTE * 60 + TIME_SECOND,
      musicTimeListArr = [];

  const combinationFunc = (number, factor) => {
    let answer = [];
    if (number.length < factor) return [];
    if (factor === 1) {
      for (let i = 0; i < number.length; i += 1) {
        answer[i] = [number[i]];
      }
    } else {
      for (let i = 0; i < number.length - factor + 1; i += 1) {
        let row = combinationFunc(number.slice(i + 1), factor - 1);
        for (let j = 0; j < row.length; j += 1) {
          answer.push([number[i]].concat(row[j]));
        }
      }
    }
    return answer;
  }
  
  const sumFunc = (targetAry) => targetAry.reduce((a, b) => a + b);
  
  for (let i = 0; i < MUSIC_LIST; i += 1) {
    let [tmpMusicMinute, tmpMusicSecond] = INPUTS[i + 1].split(/\s/).map(Number),
        tmpMusicTime = tmpMusicMinute * 60 + tmpMusicSecond;
    musicTimeListArr.push(tmpMusicTime);
  }
  
  let resultTime = [musicTimeListArr];
  for (let i = 2; i <= MUSIC_LIST; i += 1) {
    let tmpCombination = combinationFunc(musicTimeListArr, i);
        tmpResultTime = [];
    for (let j = 0; j < tmpCombination.length; j += 1) {
      let tmpSumTime = sumFunc(tmpCombination[j]);
      if (tmpSumTime <= playableTime) tmpResultTime.push(tmpSumTime);
    }
    if (tmpResultTime.length === 0) break;
    resultTime.push(tmpResultTime);
  }
  console.log(resultTime.length);
});