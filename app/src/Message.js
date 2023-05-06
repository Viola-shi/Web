import './Message.css';
import saturn from './saturn.jpeg';
import React, { useState } from 'react';

function Message(props) {
    const handlePageToBoard = () => {
        props.handlePageToBoard();
      }

    return (
    <div className="Message">
        <div className="message-header">
        <img src={saturn} alt="Logo" className="logo" />
        <h1 className="titleLogo">GRAVITY</h1>
        </div>
        <div className="message-board">
            <div className="message-board-container">
                <div className="message-board-header">
                <span className = "message-board-title">Message</span>
                </div>
                <button className='back-button' onClick={handlePageToBoard}>Back To PublicBoard</button>
            </div>
        </div>
    </div>
    )
}

document.body.className = 'Message';


export default Message;
    