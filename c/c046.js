// c046
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
  const INPUTS       = lines;
        MEMBER_COUNT = Number(INPUTS[0]),
        MEMBERS      = INPUTS[1].split(/\s/),
        BOOK_COUNT   = Number(INPUTS[0]);
  let bookList = [];
  for (let i = 3; i < INPUTS.length; i += 1) {
    let tmpArr = INPUTS[i].split(/\s/);
    let obj = {};
    obj['personName'] = tmpArr[0];
    obj['bookPrice']  = Number(tmpArr[1]);
    bookList.push(obj);
  }
  let memberList = [];
  for (let i = 0; i < MEMBER_COUNT; i += 1) {
    let obj = {};
    obj['personName'] = MEMBERS[i];
    obj['bookPrice']  = 0;
    memberList.push(obj);
  }
  for (let i = 0; i < memberList.length; i += 1) {
    for (let j = 0; j < bookList.length; j += 1) {
      if (memberList[i]['personName'] === bookList[j]['personName']) memberList[i]['bookPrice'] += bookList[j]['bookPrice'];
    }
  }
  let bookListRank = []
  let sortTarget = 'bookPrice';
  bookListRank = memberList.sort((a, b) => b[sortTarget] - a[sortTarget]);
  for (let rank in bookListRank) {
    console.log(bookListRank[rank]['personName']);
  }
});