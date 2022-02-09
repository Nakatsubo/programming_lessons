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
  const INPUTS = lines,
        JUDGE_IP_ARR = INPUTS[0].split('.'),
        COUNT  = Number(INPUTS[1]);

  const isValidationIp = (standardOctet, inputOctet) => {
    let isJudgeIp = false;
    if (standardOctet === '*' || standardOctet === inputOctet) {
      isJudgeIp = true;
    } else if (standardOctet[0] === '[') {
      const INPUT_OCTET   = standardOctet.replace(/\[/, '').replace(/\]/, '').split('-').map(Number);
      if (INPUT_OCTET[0] <= Number(inputOctet) && INPUT_OCTET[1] >= Number(inputOctet)) isJudgeIp = true;
    }
    return isJudgeIp;
  }

  for (let i = 0; i < COUNT; i += 1) {
    let tmpLog = INPUTS[i + 2].split(/\s/),
        tmpLogIpArr = tmpLog[0].split('.');
    if (JUDGE_IP_ARR[0] === tmpLogIpArr[0] && JUDGE_IP_ARR[1] === tmpLogIpArr[1] && isValidationIp(JUDGE_IP_ARR[2], tmpLogIpArr[2]) && isValidationIp(JUDGE_IP_ARR[3], tmpLogIpArr[3])) {
      console.log(`${tmpLog[0]} ${tmpLog[3].replace(/\[/, '')} ${tmpLog[6]}`);
    }
  }
});