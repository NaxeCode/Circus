import React from 'react';
import './Card.css';

enum Games {
	TicTacToe = '/tictactoe',
	Memory = '/memory',
	Sodoku = '/sodoku',
	EndlessBunny = '/endlessbunny',
	Tetris = '/tetris',
}
interface CardProps {
	link: string;
}

const Card: React.FC<CardProps> = ({ link }) => {
	const renderCardImg = () => {
		switch (link) {
			case Games.TicTacToe:
				return '️❌⭕';
				break;
			case Games.Memory:
				return '🧠';
				break;
			case Games.Sodoku:
				return '🎯';
				break;
			case Games.EndlessBunny:
				return '🐇';
				break;
			case Games.Tetris:
				return '🧱';
				break;

			default:
				break;
		}
	};
	return (
		<a href={link} className="card-link">
			<div className="background">
				<p>{renderCardImg()}</p>
			</div>
		</a>
	);
};

export default Card;
