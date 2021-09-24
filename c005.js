// c005
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
  //
  const inputIp = [];
  const getRange = (from, to) => {
    let newArray = [];
    for(let i = from; i <= to; i += 1) { newArray.push(i); }
    return newArray;
  }
  //
  for (let i = 1; i < INPUT.length; i += 1) {
    inputIp.push(INPUT[i]);
  }
  //
  for (let i = 0; i < inputIp.length; i += 1) {
    let iTmpIp = inputIp[i].split('.');
    if(iTmpIp.length !== 4) {
      console.log('False');
      continue;
    }
    let result = 'True';
    for (let j = 0; j < iTmpIp.length; j += 1) {
      if (Number.isInteger(iTmpIp[j]) === false) {
        let jTmpIp = Number(iTmpIp[j]);
        if (jTmpIp in getRange(0, 256)) {
          continue;
        } else {
          result = 'False';
        }
      } else {
        result = 'False';
      }
    }
    //
    console.log(result);
  }
});