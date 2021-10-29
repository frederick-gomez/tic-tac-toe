import React, { useState } from 'react';
import Board from './Board';
import calculateWinner from '../helpers/calculateWinner';
import Message from './Message';

const Game = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNex] = useState(true);

	const winner = calculateWinner(squares);
	const xO = xIsNext ? 'X' : 'O';

	const selectHandler = (i) => {
		const squaresCopy = [...squares];
		if (winner || squaresCopy[i]) {
			return;
		}
		squaresCopy[i] = xO;
		setSquares(squaresCopy);
		setXIsNex(!xIsNext);
	};

	const resetGame = () => {
		setSquares(Array(9).fill(null));
	};

	return (
		<>
			<Board squares={squares} onClick={selectHandler} />
			{winner ? <Message winner={winner} onClick={resetGame} /> : null}
		</>
	);
};

export default Game;
