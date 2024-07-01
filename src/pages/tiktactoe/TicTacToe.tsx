import React from 'react';
import Card from '../../components/card/Card';
import './TicTacToe.css';
import GameBoard from './GameBoard';

const TicTacToe: React.FC = () => {
	return (
		<div>
			<p>TicTacToe</p>
			<div>
				<GameBoard />
			</div>
			<Card link="/" />
			<p>Home...</p>
		</div>
	);
};

export default TicTacToe;
