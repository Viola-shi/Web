import './Profile.css';
import saturn from './saturn.jpeg';
import React, { useState } from 'react';

function Profile(props) {
    const handlePageToBoard = () => {
        this.props.handlePageToBoard();
      }

    return (
    <div className="Profile">
        <div className="profilel-header">
        <img src={saturn} alt="Logo" className="logo" />
        <h1 className="titleLogo">GRAVITY</h1>
        </div>
    </div>
    )
}

document.body.className = 'Profile';


export default Profile;
    