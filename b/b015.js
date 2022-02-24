// わからん
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
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
        INPUT_A_ARR = INPUTS[0].split(/\s/).map(String).join(''),
        INPUT_B_ARR = INPUTS[1].split(/\s/).map(String).join('');
        
  const NUMBER_LIST = {
    0: '1111110',
    1: '0110000',
    2: '1101101',
    3: '1111001',
    4: '0110011',
    5: '1011011',
    6: '1011111',
    7: '1110010',
    8: '1111111',
    9: '1111011'
  }

  // 装置が正しく2桁の数字を表すか
  const compareNormalArray = (array) => {
    let flag = false;
    for (let i = 0; i < Object.keys(NUMBER_LIST).length; i += 1) {
      if (array === NUMBER_LIST[i]) {
        flag = true;
        break;
      }
    }
    return flag;
  }
  compareNormalArray(INPUT_A_ARR) === true && compareNormalArray(INPUT_B_ARR) === true ? console.log('Yes') : console.log('No');

  // 装置を対称移動すると正しく2桁の数字を表すか
  const compareSymmetryArray = (array) => {
    let flag = false;
    [array[1], array[5]] = [array[5], array[1]];
    [array[2], array[4]] = [array[4], array[2]];
    for (let i = 0; i < Object.keys(NUMBER_LIST).length; i += 1) {
      if (array === NUMBER_LIST[i]) {
        flag = true;
        break;
      }
    }
    return flag;
  }
  compareSymmetryArray(INPUT_A_ARR) === true && compareSymmetryArray(INPUT_B_ARR) === true ? console.log('Yes') : console.log('No');

//   // 装置を回転移動すると正しく2桁の数字を表すか
//   const compareLotationArray = (array) => {
//     let flag = 0;
//     [array[3], array[0]] = [array[0], array[3]];
//     [array[4], array[1]] = [array[1], array[4]];
//     [array[5], array[2]] = [array[2], array[5]];
//     for (let i = 0; i < 10; i += 1) {
//       if (array.join('') === NUMBER_LIST[i].join('')) {
//           flag += 1;
//           break;
//       }
//     }
//     return flag;
//   }
//   compareLotationArray(INPUT_A_ARR) === 1 && compareLotationArray(INPUT_B_ARR) === 1 ? resultArr.push('Yes') : resultArr.push('No');

});