// b011
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
  const [POCKET, CARD_NUMBER] = lines[0].split(/\s/).map(Number);
  
  const PAGE_NUMBER     = Math.trunc((CARD_NUMBER - 1) / (POCKET * 2)) + 1,
        PAGE_MAX_NUMBER = PAGE_NUMBER * POCKET * 2,
        PAGE_MIN_NUMBER = PAGE_MAX_NUMBER - (POCKET * 2 - 1);
        
  console.log(PAGE_MAX_NUMBER + PAGE_MIN_NUMBER - CARD_NUMBER);
});