// d068
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
        COUNT  = Number(INPUTS[0]),
        STRING = INPUTS[1].split('');
  const SUNNY_COUNT = STRING.filter((elem) => { return elem === 'S'}).length;
  console.log(`${SUNNY_COUNT} ${COUNT - SUNNY_COUNT}`);
});