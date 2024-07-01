import React, { MouseEventHandler, useState } from 'react';
import GameSquare from './GameSquare';

enum SquareEnum {
	X = 'X',
	O = 'O',
	B = '',
}

const myTurn: boolean = true;
const boardState: Array<SquareEnum> = Array(9).fill(SquareEnum.B);

const GameBoard: React.FC = () => {
	const [buttonLabels, setButtonLabels] = useState(boardState);

	const handleClick = (index: number) => {
		setButtonLabels((prevLabel) => {
			const newLabels = [...prevLabel];
			newLabels[index] = SquareEnum.X;
			return newLabels;
		});
		console.log(`button ID: ${index}`);
	};

	return (
		<div>
			{buttonLabels.map((label, index) => (
				<GameSquare
					index={index}
					value={label}
					onClick={() => handleClick(index)}
				/>
			))}
		</div>
	);
};

export default GameBoard;
