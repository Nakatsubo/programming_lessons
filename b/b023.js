// b023
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
  let inputNumber = String(lines[0]),
      originalNumberArr = inputNumber.split('').map(String);

  const getConvertValue = (number, type) => {
    const DICTINARY = {
      '0':{'minus':[],              'plusminus':['6', '9'], 'plus':['8']},
      '1':{'minus':[],              'plusminus':[],         'plus':['7']},
      '2':{'minus':[],              'plusminus':['3'],      'plus':[]},
      '3':{'minus':[],              'plusminus':['2', '5'], 'plus':['9']},
      '4':{'minus':[],              'plusminus':[],         'plus':[]},
      '5':{'minus':[],              'plusminus':['3'],      'plus':['6', '9']},
      '6':{'minus':['5'],           'plusminus':['0', '9'], 'plus':['8']},
      '7':{'minus':['1'],           'plusminus':[],         'plus':[]},
      '8':{'minus':['0', '6', '9'], 'plusminus':[],         'plus':[]},
      '9':{'minus':['3', '5'],      'plusminus':['0', '6'], 'plus':['8']},
    }
    return DICTINARY[number][type];
  }

  let resultArr = [];
  for (let i = 0; i < originalNumberArr.length; i += 1) {
    let inputNumber = originalNumberArr[i];
    let numberArr = originalNumberArr.concat();

    // マイナスして成立する場合
    let minusArr = getConvertValue(inputNumber, 'minus');
    if(minusArr.length !== 0) {
      for (let j = 0; j < numberArr.length; j += 1) {
        if (i === j) {
          continue;
        } else {
          let tmpPlusArr = getConvertValue(numberArr[j], 'plus');
          if (tmpPlusArr.length !== 0) {
            for (k = 0; k < minusArr.length; k += 1) {
              let tmpMinus = minusArr[k];
              for (let l = 0; l < tmpPlusArr.length; l += 1) {
                let tmpNumberArr = numberArr.concat();
                tmpNumberArr[i]  = tmpMinus;
                tmpNumberArr[j]  = tmpPlusArr[l];
                resultArr.push(Number(tmpNumberArr.join('')));
              }
            }
          }
        }
      }
    }

    // プラスして成立する場合
    let plusArr = getConvertValue(inputNumber, 'plus');
    if(plusArr.length !== 0) {
      for (let j = 0; j < numberArr.length; j += 1) {
        if (i === j) {
          continue;
        } else {
          let tmpMinusArr = getConvertValue(numberArr[j], 'minus');
          if (tmpMinusArr.length !== 0) {
            for (k = 0; k < plusArr.length; k += 1) {
              let tmpPlus = plusArr[k];
              for (let l = 0; l < tmpMinusArr.length; l += 1) {
                let tmpNumberArr = numberArr.concat();
                tmpNumberArr[i]  = tmpPlus;
                tmpNumberArr[j]  = tmpMinusArr[l];
                resultArr.push(Number(tmpNumberArr.join('')));
              }
            }
          }
        }
      }
    }

    // プラスマイナスして成立する場合
    let plusminusArr = getConvertValue(inputNumber, 'plusminus');
    if (plusminusArr.length !== 0) {
      for (let j = 0; j < plusminusArr.length; j += 1) {
        let tmpNumberArr = numberArr.concat();
        tmpNumberArr[i] = plusminusArr[j];
        resultArr.push(Number(tmpNumberArr.join('')));
      }
    }

  }
  
  // 出力する
  let sortResultArr = [...new Set(resultArr)].sort((a, b) => { return a - b; }).map(String);
  for (let i = 0; i < sortResultArr.length; i += 1) {
    if (sortResultArr[i].length !== originalNumberArr.length) sortResultArr[i] = '0' + sortResultArr[i];
  }
  
  sortResultArr.length !== 0 ? console.log(sortResultArr.join('\n')) : console.log('none');
});