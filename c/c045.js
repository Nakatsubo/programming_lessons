// c045
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
  const [PAGE_VOLUME, PAGE_SIZE, PAGE_SHOW] = lines[0].split(/\s/).map(Number);
  const PAGE_LIST = [...Array(PAGE_VOLUME)].map((_, i) => i + 1);
  const START_INDEX = PAGE_SIZE * (PAGE_SHOW - 1),
        END_INDEX   = PAGE_SIZE * (PAGE_SHOW - 1) + PAGE_SIZE;
  const RESULT = PAGE_LIST.slice(START_INDEX, END_INDEX);
  !RESULT.length ? console.log('none') : console.log(RESULT.join(' '));
});