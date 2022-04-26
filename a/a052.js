// a052

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
  const DATA   = lines,
        COUNT  = Number(DATA[0]),
        [A, B] = DATA[1].split(/\s/).map(Number),
        AB     = A + B;

  let resultArr = Array(COUNT).fill(0);
  // let tmpArr = [-1];
  let aArr = Array(COUNT).fill(0),
      bArr = Array(COUNT).fill(0);

  // while (true) {
  //   let next = [];

  //   for (let i = 0; i < tmpArr.length; i += 1) {
  //     if (i + A <= COUNT - 1) {
  //       if (resultArr[i + A] === 0) {
  //         next.push(i + A);
  //         resultArr[i + A] = 1;
  //       }
  //       else {
  //         resultArr[COUNT - 1] = 1;
  //       }
  //     }
  //     if (i + B <= COUNT - 1) {
  //       if (resultArr[i + B] === 0) {
  //         next.push(i + B);
  //         resultArr[i + B] = 1;
  //       }
  //       else {
  //         resultArr[COUNT - 1] = 1;
  //       }
  //     }
  //   }

  //   if (next.length === 0) break;
  //   tmpArr = next;
  // }
  
  console.log(resultArr);
});

