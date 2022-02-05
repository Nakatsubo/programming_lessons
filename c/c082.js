// c082
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
        [STUDENTS, RANK] = INPUTS[0].split(/\s/).map(Number);
  let englishScores  = [],
      japaneseScores = [],
      mathScores     = [];
  for (let i = 0; i < STUDENTS; i += 1) {
    let [englishScore, japaneseScore, mathScore] = INPUTS[i + 1].split(/\s/).map(Number);
    englishScores.push(englishScore);
    japaneseScores.push(japaneseScore);
    mathScores.push(mathScore);
  }
  const compareRank = (a, b) => {
    if (a > b) return 1;
    else return -1;
  }
  const SORT_ENGRISH_SCORES     = englishScores.sort(compareRank),
        STANDARD_ENGRISH_SCORE  = SORT_ENGRISH_SCORES[RANK - 1],
        SORT_JAPANESE_SCORE     = japaneseScores.sort(compareRank),
        STANDARD_JAPANESE_SCORE = SORT_JAPANESE_SCORE[RANK - 1],
        SORT_MATH_SCORES        = mathScores.sort(compareRank),
        STANDARD_MATH_SCORE     = SORT_MATH_SCORES[RANK - 1];
  for (let i = 0; i < STUDENTS; i += 1) {
    let [englishScore, japaneseScore, mathScore] = INPUTS[i + 1].split(/\s/).map(Number);
    let counter = 0;
    if (STANDARD_ENGRISH_SCORE >= englishScore) counter += 1;
    if (STANDARD_JAPANESE_SCORE >= japaneseScore) counter += 1;
    if (STANDARD_MATH_SCORE >= mathScore) counter += 1;
    console.log(counter);
  }
});