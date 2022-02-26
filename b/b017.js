// b017
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
  const CARD_ARR = lines[0].split('').map(String);
  
  const SORT_CARD_ARR = CARD_ARR.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  });
  
  const isWildCard = SORT_CARD_ARR.includes('*');
  const checkDuplicateCard = (array) => {
    let judgeCount = 0;
    for (let i = 0; i < array.length; i += 1) {
      let tmpSortCardArr = new Set(array);
      if (tmpSortCardArr.size === array.length) {
        break;
      } else {
        if (array[i] === array[i + 1]) judgeCount += 1;
      }
    }
    return judgeCount;
  }

  if ((!isWildCard && checkDuplicateCard(SORT_CARD_ARR) === 3) || (isWildCard && checkDuplicateCard(SORT_CARD_ARR) === 2)) {
    console.log('FourCard');
  } else if ((!isWildCard && checkDuplicateCard(SORT_CARD_ARR) === 2) || (isWildCard && checkDuplicateCard(SORT_CARD_ARR) === 1)) {
    if (!isWildCard) {
      let countPair = SORT_CARD_ARR.filter(el => el === SORT_CARD_ARR[0]).length;
      countPair !== 2 ? console.log('ThreeCard') : console.log('TwoPair');
    } else if (isWildCard) {
      console.log('ThreeCard');
    }
  } else if ((!isWildCard && checkDuplicateCard(SORT_CARD_ARR) === 1) || (isWildCard && checkDuplicateCard(SORT_CARD_ARR) === 0)) {
    console.log('OnePair');
  } else if (!isWildCard && checkDuplicateCard(SORT_CARD_ARR) === 0) {
    console.log('NoPair');
  }
 
});