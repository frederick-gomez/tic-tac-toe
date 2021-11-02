import React from 'react';
import './Messages.css';

const Message = (props) => {
	return (
		<div className='message-container'>
			<h2 className='winner-title'>{props.children}</h2>
			{props.onClick && (
				<button onClick={props.onClick} className='reset-btn'>
					Reset Game
				</button>
			)}
		</div>
	);
};

export default Message;
