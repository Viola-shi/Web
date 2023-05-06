import './Profile.css';
import saturn from './saturn.jpeg';
import React, { useState } from 'react';
import axios from "axios"

function Profile(props) {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const handlePageToBoard = () => {
        props.handlePageToBoard();
      }

    const requestProfile = axios.create({
        baseURL: `http://localhost:8000/users/${props.userId}`,
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
    })

    requestProfile.get("")
        .then(res => {
            setUserName(res.data.name);
            setEmail(res.data.email);
        })
        .catch(e => {
            console.log(e.response.data.message);
        })

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
                <span className = "information">User Name : {userName}</span>
                <div className = "information">Email : {email}</div>
                </div>
                <button className='back-button' onClick={handlePageToBoard}>Back To PublicBoard</button>
            </div>
        </div>
    </div>
    )
}

document.body.className = 'Profile';


export default Profile;
    