// c094
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
        COUNT  = Number(lines[0]);
  let totalTax = 0;
  for (let i = 0; i < COUNT; i += 1) {
    let tmpIncome = Number(INPUTS[i + 1]);
    if (tmpIncome > 100000 && tmpIncome <= 750000) {
      totalTax += Math.trunc((tmpIncome - 100000) * 0.1);
    } else if (tmpIncome > 750000 && tmpIncome <= 1500000) {
      totalTax += (750000 - 100000) * 0.1;
      totalTax += Math.trunc((tmpIncome - 750000) * 0.2);
    } else if (tmpIncome > 1500000) {
      totalTax += (750000 - 100000) * 0.1;
      totalTax += (1500000 - 750000) * 0.2;
      totalTax += Math.trunc((tmpIncome - 1500000) * 0.4);
    }
  }
  console.log(totalTax);
});