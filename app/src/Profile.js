import './Profile.css';
import saturn from './saturn.jpeg';
import React, { useState } from 'react';

function Profile(props) {
    const handlePageToBoard = () => {
        props.handlePageToBoard();
      }

    return (
    <div className="Profile">
        <div className="profile-header">
        <img src={saturn} alt="Logo" className="logo" />
        <h1 className="titleLogo">GRAVITY</h1>
        </div>
        <div className="profile-board">
            <div className="public-board-container">
                <div className="profile-board-header">
                <span className = "profile-board-title">Profile</span>
                </div>
                <div className="profile-information">
                <span className = "information">User Name :</span>
                <div className = "information">Email :</div>
                </div>
                <button className='back-button' onClick={handlePageToBoard}>Back To PublicBoard</button>
            </div>
        </div>
    </div>
    )
}

document.body.className = 'Profile';


export default Profile;
    