import React from 'react';
import './Messages.css';

const Message = ({ winner, onClick }) => {
	return (
		<div className='message-container'>
			<h2 className='winner-title'>{`${winner} won the game!`}</h2>
			<button onClick={onClick} className='reset-btn'>
				Reset Game
			</button>
		</div>
	);
};

export default Message;
