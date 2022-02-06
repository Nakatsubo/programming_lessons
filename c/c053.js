// c053
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
        NUMBERS_ARR = INPUTS[1].split(/\s/);
   let multiplyNumber = 0,
       maxValueFlag   = 0,
       newNumbersArr  = [];
   for (let i = 0; i < COUNT; i += 1) {
     if (NUMBERS_ARR[i] === 'x10') multiplyNumber = 10;
     else if (NUMBERS_ARR[i] === '0') maxValueFlag = 1;
     else newNumbersArr.push(Number(NUMBERS_ARR[i]));
   }
   if (maxValueFlag === 1) {
     const MAX_NUMBER = newNumbersArr.reduce((a, b) => Math.max(a, b)),
           INDEX = newNumbersArr.indexOf(MAX_NUMBER);
     newNumbersArr.splice(INDEX, 1);
   }
   const REDUCER = (a, b) => a + b,
         CALCULATE_NUMBER = newNumbersArr.reduce(REDUCER);
   multiplyNumber === 10 ? console.log(CALCULATE_NUMBER * multiplyNumber) : console.log(CALCULATE_NUMBER);
});