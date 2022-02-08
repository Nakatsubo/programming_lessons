// c075
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
        [CHARGE, COUNT] = INPUTS[0].split(/\s/).map(Number);
  let paicaCharge = CHARGE,
      paicaPoint  = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let tmpPayment = Number(INPUTS[i + 1]);
    if (paicaPoint >= tmpPayment) {
      paicaPoint -= tmpPayment;
    } else {
      paicaCharge -= tmpPayment;
      paicaPoint += tmpPayment * 0.1;
    }
    console.log(`${paicaCharge} ${paicaPoint}`);
  }
});