// c105
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
        COUNT  = Number(INPUTS[0]);

  const CARD_ARR     = INPUTS[1].split(/\s/).map(Number),
        NEW_CARD_ARR = CARD_ARR.sort((a, b) => { return a - b; });

  let result  = 0;
  for (let i = 0; i < COUNT - 1; i += 1) {
    let previousCard = NEW_CARD_ARR[i],
        currentCard  = NEW_CARD_ARR[i + 1];

    let difference = currentCard - previousCard;
    if (difference !== 1) result += previousCard;
  }
  result += NEW_CARD_ARR.slice(-1)[0];

  console.log(result);
});