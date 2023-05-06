import './MyPosts.css';
import saturn from './saturn.jpeg';
import React, { useState } from 'react';

function MyPosts(props) {
    const handlePageToBoard = () => {
        props.handlePageToBoard();
      }

    return (
    <div className="MyPosts">
        <div className="myposts-header">
        <img src={saturn} alt="Logo" className="logo" />
        <h1 className="titleLogo">GRAVITY</h1>
        </div>
        <div className="myposts-board">
            <div className="myposts-board-container">
                <div className="myposts-board-header">
                <span className = "myposts-board-title">My Posts</span>
                </div>
                <button className='back-button' onClick={handlePageToBoard}>Back To PublicBoard</button>
            </div>
        </div>
    </div>
    )
}

document.body.className = 'MyPosts';


export default MyPosts;
    