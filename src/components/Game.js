import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers/calculateWinner';

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

	return (
		<>
			<Board squares={squares} onClick={selectHandler} />
		</>
	);
};

export default Game;
