import React, { useState } from 'react';
import Board from './Board';
import calculateWinner from '../helpers/calculateWinner';
import Message from './Message';

const Game = () => {
	const [squares, setSquares] = useState(Array(9).fill(''));
	const [nextPlayer, setNextPlayer] = useState('X');
	const [isDraw, setIsDraw] = useState(false);

	const winner = calculateWinner(squares);
	const xO = nextPlayer === 'X' ? 'O' : 'X';

	const selectHandler = (i) => {
		const squaresCopy = [...squares];

		if (winner || squaresCopy[i]) {
			return;
		}

		squaresCopy[i] = xO;
		setSquares(squaresCopy);
		setNextPlayer(xO);

		if (squaresCopy.indexOf('') === -1 && !winner) {
			setIsDraw(true);
			return;
		}
	};

	const resetGame = () => {
		setSquares(Array(9).fill(''));
		setNextPlayer(xO);
		setIsDraw(false);
	};

	return (
		<>
			<Message>Next player: {xO}</Message>
			<Board squares={squares} onClick={selectHandler} />
			{winner && (
				<Message onClick={resetGame}>{nextPlayer} won the game</Message>
			)}
			{isDraw && <Message onClick={resetGame}>There is a draw</Message>}
		</>
	);
};

export default Game;
