import './Message.css';
import saturn from './saturn.jpeg';
import React, { useState } from 'react';
import FriendsList from './FriendsList';

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
        <div className='right-form'>
        <div className="message-board">
            <div className="message-board-container">
                <div className="message-board-header">
                <span className = "message-board-title">Message</span>
                </div>
                <div className='chatbox'>
                {}
                </div>
            </div>
            <div className="send-message">
            <form >
                <input
                type="text"
                placeholder="write a message"
                className="message-input"
                />
                <button type="submit" className="send-button">Send</button>
            </form>
            <button className='message-back-button' onClick={handlePageToBoard}>Back To PublicBoard</button>
        </div>
        </div>
       
        </div>
        <div className='left-form'>
            <FriendsList/>
        </div>
        
    </div>
    )
}

document.body.className = 'Message';


export default Message;
    