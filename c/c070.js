// c070
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
  for (let i = 0; i < COUNT; i += 1) {
    let card = INPUTS[i + 1].split('').map(Number);
    let sortCard = card.sort((a, b) => { a - b; })
    let judgeCount = 0;
    for (let j = 0; j < sortCard.length; j += 1) {
      if (sortCard[j] === sortCard[j + 1]) judgeCount += 1;
    }
    if (judgeCount === 3) {
      console.log('Four Card');
    } else if (judgeCount === 2) {
      let countPair = sortCard.filter(el => el === sortCard[0]).length;
      countPair !== 2 ? console.log('Three Card') : console.log('Two Pair');
    } else if (judgeCount === 1) {
      console.log('One Pair');
    } else if (judgeCount === 0) {
      console.log('No Pair');
    }
  }
});