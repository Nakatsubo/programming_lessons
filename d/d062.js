// d062
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
  const [X, Y, Z] = lines[0].split(/\s/).map(Number);
  let prefixes = [];
  for (let i = 'A'.charCodeAt(0); i <= 'J'.charCodeAt(0); i++) {
    prefixes.push(String.fromCharCode([i]))
  }
  console.log(prefixes.splice(0, X).join(''));
  console.log(prefixes.splice(0, Y).join(''));
  console.log(prefixes.join(''));
});