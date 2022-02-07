// c068
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
        ENCRYPTION_COUNT = Number(INPUT[0]),
        ENCRYPTION_LINE  = INPUT[1];
  let DECRYPYION_LINE  = [];
  for (let i = 0; i < ENCRYPTION_LINE.length; i += 1) {
    let tmpNumber = 0;
    (i + 1) % 2 === 1 ? tmpNumber = ENCRYPTION_COUNT * - 1 : tmpNumber = ENCRYPTION_COUNT;
    let tmpFromCharCode = ENCRYPTION_LINE[i].codePointAt() + tmpNumber;
    const TMP_A = 'A'.codePointAt();
    const TMP_Z = 'Z'.codePointAt();
    if (tmpFromCharCode < TMP_A) {
      let tmpString = String.fromCodePoint(TMP_Z - (TMP_A - tmpFromCharCode - 1));
      DECRYPYION_LINE.push(tmpString);
    } else if (tmpFromCharCode > TMP_Z) {
      let tmpString = String.fromCodePoint(TMP_A + (tmpFromCharCode - TMP_Z - 1));
      DECRYPYION_LINE.push(tmpString);
    } else {
      DECRYPYION_LINE.push(String.fromCodePoint(tmpFromCharCode));
    }
  }
  console.log(DECRYPYION_LINE.join(''));
});