import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import Card from './components/card/Card';
import TicTacToe from './pages/TicTacToe';
import './App.css';
import Memory from './pages/Memory';
import Sodoku from './pages/Sodoku';
import EndlessBunny from './pages/EndlessBunny';
import Tetris from './pages/Tetris';

const Home: React.FC = () => (
	<div>
		<h1>Game Select</h1>
	</div>
);

const App: React.FC = () => {
	const location = useLocation();

	// Check if the current path is the home path
	const isHomePage = location.pathname === '/';

	return (
		<>
			{isHomePage && (
				<nav className="container">
					<Card link="/tictactoe" />
					<Card link="/memory" />
					<Card link="/sodoku" />
					<Card link="/endlessbunny" />
					<Card link="/tetris" />
				</nav>
			)}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tictactoe" element={<TicTacToe />} />
				<Route path="/memory" element={<Memory />} />
				<Route path="/sodoku" element={<Sodoku />} />
				<Route path="/endlessbunny" element={<EndlessBunny />} />
				<Route path="/tetris" element={<Tetris />} />
			</Routes>
		</>
	);
};

const AppWrapper: React.FC = () => (
	<Router>
		<App />
	</Router>
);

export default AppWrapper;
