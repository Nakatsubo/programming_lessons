// b004
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
  // const INPUTS    = lines,
  //       JUDGE_LOG = INPUTS[0],
  //       COUNT     = Number(INPUTS[1]);
  // let judgeLogArr = JUDGE_LOG.split('.');
  // let thirdOctetArr  = [],
  //     fourthOctetArr = [];
  // if (judgeLogArr[2].includes('[') === true) thirdOctetArr = judgeLogArr[2].replace(/\[/, '').replace(/\]/, '').split('-').map(Number);
  // else if (judgeLogArr[2].includes('*') === true) thirdOctetArr.push(0, 255);
  // if (judgeLogArr[3].includes('[') === true) fourthOctetArr = judgeLogArr[2].replace(/\[/, '').replace(/\]/, '').split('-').map(Number);
  // else if (judgeLogArr[3].includes('*') === true) fourthOctetArr.push(0, 255);
  // for (let i = 0; i < COUNT; i += 1) {
  //   let tmpLog = INPUTS[i + 2],
  //       tmpLogArr = tmpLog.split(/\s/),
  //       tmpLogIpArr = tmpLogArr[0].split('.').map(Number);
  //   const result = `${tmpLogArr[0]} ${tmpLogArr[3].replace(/\[/, '')} ${tmpLogArr[6]}`;
  //   if (thirdOctetArr.length === 0 && fourthOctetArr.length === 0) {
  //     if (tmpLogIpArr[2] === Number(judgeLogArr[2]) && tmpLogIpArr[3] === Number(judgeLogArr[3])) {
  //       console.log(result);
  //     }
  //   } else if (thirdOctetArr.length !== 0 && fourthOctetArr.length === 0) {
  //     if (thirdOctetArr[0] <= tmpLogIpArr[2] && thirdOctetArr[1] >= tmpLogIpArr[2]) {
  //       console.log(result);
  //     }
  //   } else if (thirdOctetArr.length === 0 && fourthOctetArr.length !== 0) {
  //     if (fourthOctetArr[0] <= tmpLogIpArr[3] && fourthOctetArr[1] >= tmpLogIpArr[3]) {
  //       console.log(result);
  //     }
  //   } else if (thirdOctetArr.length !== 0 && fourthOctetArr.length !== 0) {
  //     if (thirdOctetArr[0] <= tmpLogIpArr[2] && thirdOctetArr[1] >= tmpLogIpArr[2] && fourthOctetArr[0] <= tmpLogIpArr[2] && fourthOctetArr[1] >= tmpLogIpArr[3]) {
  //       console.log(result);
  //     }
  //   }
  // }

  const INPUTS = lines,
        JUDGE_IP_ARR = INPUTS[0].split('.'),
        COUNT  = Number(INPUTS[1]);

  const isValidationIp = (standardOctet, inputOctet) => {
    let isJudge = false;
    if (standardOctet === '*' || standardOctet === inputOctet) {
      isJudge = true;
    } else if (standardOctet[0] === '[') {
      const INPUT_OCTET   = standardOctet.split('-'),
            LOWEST_OCTET  = Number(INPUT_OCTET[0].replace(/\[/, '')),
            HIGHEST_OCTET = Number(INPUT_OCTET[1].replace(/\]/, ''));
      if (LOWEST_OCTET <= Number(inputOctet) && HIGHEST_OCTET >= Number(inputOctet)) isJudge = true;
    }
    return isJudge;
  }

  for (let i = 0; i < COUNT; i += 1) {
    let tmpLog = INPUTS[i + 2].split(/\s/),
        tmpLogIpArr = tmpLog[0].split('.');
    if (JUDGE_IP_ARR[0] === tmpLogIpArr[0] && JUDGE_IP_ARR[1] === tmpLogIpArr[1] && isValidationIp(JUDGE_IP_ARR[2], tmpLogIpArr[2]) && isValidationIp(JUDGE_IP_ARR[3], tmpLogIpArr[3])) {
      console.log(`${tmpLog[0]} ${tmpLog[3].replace(/\[/, '')} ${tmpLog[6]}`);
    }
  }

});