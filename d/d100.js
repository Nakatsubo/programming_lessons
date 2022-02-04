// d100
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
  let string = lines[0]
      stringAry  = lines[0].split('').map(String);
  const UNDERBAR = stringAry.filter((elem) => { return elem === '_' }),
        HYPHEN   = stringAry.filter((elem) => { return elem === '-' });
  let result;
  if (UNDERBAR.length > HYPHEN.length) result = string.replace(/-/g, '_');
  else if (HYPHEN.length > UNDERBAR.length) result = string.replace(/_/g, '-'); 
  else if (UNDERBAR.length === HYPHEN.length) result = string.replace(/-/g, '_');
  console.log(result);
});