// c028
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
        COUNT  = INPUTS[0];
  let result = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let [tmpCorrectAnswer, tmpAnswer] = INPUTS[i + 1].split(/\s/).map(String);
    if (tmpCorrectAnswer === tmpAnswer) {
      result += 2;
    } else if (tmpCorrectAnswer.length === tmpAnswer.length) {
      let tmpResult = 0;
      for (let j = 0; j < tmpCorrectAnswer.length; j += 1) {
        if (tmpCorrectAnswer[j] !== tmpAnswer[j]) tmpResult += 1;
      }
      if (tmpResult === 1) result += 1;
    } else {
      result += 0;
    }
  }
  console.log(result);
});