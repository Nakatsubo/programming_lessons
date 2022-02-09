// c086
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
  const INPUT_STRING_ARR    = lines[0].split('').map(String),
        REMOVALS_STRING_ARR = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const OUTPUT_STRING_ARR = INPUT_STRING_ARR.filter((el) => {
    return ! REMOVALS_STRING_ARR.includes(el);
  })
  console.log(OUTPUT_STRING_ARR.join(''));
});