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
	const cardsCount: number = Number(lines[0]);
	const cards: number[] = lines[1].split(' ').map(Number);

	// カードの積を計算する
	const calculateScore = (cards: number[]): number => {
		if (cards.length === 0) return 0; // 空の配列の場合
		return cards.reduce((score, card) => score * card, 1);
	};

	// 最高値を取得する
	let maxScore: number = calculateScore(cards);

	// すべてのカードを組み合わせる
	for (let i = 0; i < cards.length; i++) {
		for (let j = 0; j < cards.length; j++) {
			// 同じカードを選ばないようにする
			if (i !== j) {
				let modifiedCards: number[] = [...cards];
				modifiedCards[i] += 1; // 1つのカードを +1
				modifiedCards[j] -= 1; // もう1つのカードを -1

				// 新しいスコアを計算
				let newScore: number = calculateScore(modifiedCards);
				maxScore = Math.max(maxScore, newScore);
			}
		}
	}

	// maxScoreが-0の場合は0に変換
	if (maxScore === -0) {
		maxScore = 0;
	}

	console.log(maxScore);
});
