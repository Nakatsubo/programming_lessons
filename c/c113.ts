process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!
import * as readline from 'readline';

// 標準入力からデータを受け取る
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// 入力を受け取るための変数
let lines: string[] = [];

// 入力を行う
rl.on('line', (line: string) => {
	lines.push(line);
});

// 入力が完了したら処理を行う
rl.on('close', () => {
	const [range, roll]: number[] = lines[0].split(' ').map(Number);
	const effects: string[] = lines.slice(1, range - 1);
	const dices: number[] = lines.slice(range - 1).map(Number);

	let position: number = 0; // スタート位置
	let count: number = 0; // サイコロの回数
	let isGoaled: boolean = false; // ゴールしたか

	for (let i = 0; i < dices.length; i++) {
		count++;

		let newPosition: number = position + dices[i];

		// ゴールに到達した場合
		if (newPosition >= range - 1) {
			position = range - 1;
			isGoaled = true;
			break;
		}
		// ゴールに到達していない場合
		else {
			position = newPosition;
			if (position > 0 && position < range - 1) {
				switch (effects[position - 1]) {
					case '+':
						position++;
						break;
					case '-':
						position--;
						break;
					case 'r':
						position = 0;
						break;
				}
			}
		}
	}

	// 出力
	if (isGoaled) {
		console.log('goal');
		console.log(count);
	} else {
		console.log('still');
		console.log(position);
	}
});
