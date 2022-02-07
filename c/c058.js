// c058
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
  const INPUT = lines;
  let [count, correctStr, defaultStr] = INPUT[0].split(/\s/);
  let result = 0;
  while (true) {
    if (correctStr !== defaultStr) {
      correctStr = correctStr.slice(- 1) + correctStr.slice(0, count - 1);
      result += 1;
    } else {
      console.log(result);
      break;
    }
  }
});