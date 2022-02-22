// b014
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
[X, Y, Z] = INPUTS[0].split(/\s/).map(Number);

let cubicArr = Array.from(new Array(Z), () => new Array(Y).fill('.'));

let tmpCubicDataArr = [];
for (let i = 0; i < INPUTS.length - 1; i += 1) {
  let tmp = INPUTS[i + 1].split('');
  if (tmp[0] !== '-') tmpCubicDataArr.push(tmp);
}

for (let i = 0; i < tmpCubicDataArr.length; i += 1) {
  for (j = 0; j < Y; j += 1) {
    let tmpArr = tmpCubicDataArr[i];
    let tmpValue = tmpArr[j];
    if (tmpValue === '#') {
      cubicArr[i][j] = '#'; // ここが仕様上アクセスできずエラー -> スタック(Javascriptはあきらめた)
    }
  }
}
console.log(cubicArr);

});


// Pythonのコード

// # coding: utf-8
// X,Y,Z=list(map(int,input().split()))
// cubicArr=[['.' for j in range(Y)] for i in range(Z)]

// for i in range(Z):
//     for j in range(X):
//         cubic=input()
//         for k in range(Y):
//             if cubic[k]=='#':
//                 cubicArr[i][k]='#'
//     division=input()
// # print(cubicArr)

// for i in reversed(range(Z)):
//     cubic=map(str,cubicArr[i])
//     result=''.join(cubic)
//     print(result)