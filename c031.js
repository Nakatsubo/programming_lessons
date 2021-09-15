// c031
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
  const INPUTS = lines;
  const TIMEZONE_CITYS = [];
  const TIMEZONE_LAGS = [];
  for (let i = 1; i < INPUTS.length - 1; i += 1) {
    let tmp = [];
    tmp = INPUTS[i].split(/\s/);
    TIMEZONE_CITYS.push(tmp[0]);
    TIMEZONE_LAGS.push(Number(tmp[1]));
  }
  //
  const BLOG_POST = INPUTS.slice(-1)[0];
  const BLOG_TMP = BLOG_POST.split(/\s/);
  //
  const BASE_CITY = String(BLOG_TMP[0]);
  const BASE_TIMESTAMP = BLOG_TMP[1].split(':');
  const BASE_HOUR = Number(BASE_TIMESTAMP[0]);
  const BASE_MINITE = BASE_TIMESTAMP[1];
  //
  const STANDARD_CITY_TMP = TIMEZONE_CITYS.indexOf(BASE_CITY) + 1;
  const STANDARD_CITY = INPUTS[STANDARD_CITY_TMP].split(/\s/);
  const STANDARD_CITY_TIME = Number(STANDARD_CITY[1]);
  const STANDARD_HOUR = (BASE_HOUR - STANDARD_CITY_TIME) % 24;
  //
  const OUTPUTS = [];
  TIMEZONE_LAGS.forEach((lags) => {
    let tmp = (STANDARD_HOUR + lags) % 24;
    if (Math.sign(tmp) === -1) { tmp += 24; }
    //
    tmp = String(tmp);
    if (tmp.length < 2) { tmp = `0${tmp}`; }
    let newTime = `${tmp}:${BASE_MINITE}`;
    OUTPUTS.push(newTime);
  })
  //
  console.log(OUTPUTS.join('\n'));
});