import React, { MouseEventHandler } from 'react';

interface SquareProps {
	index: number;
	value: string;
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const GameSquare: React.FC<SquareProps> = ({ index, value, onClick }) => {
	return (
		<button key={index} className="square" onClick={onClick}>
			{value}
		</button>
	);
};

export default GameSquare;
