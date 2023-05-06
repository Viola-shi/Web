import React from 'react';
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Board from './Board';
import Profile from './Profile';
import Background from './background';

const Homepage = () => {

    const [page, setPage] = useState("Login");
    const [userId, setUserId] = useState("");

    const handlePageToSignup = () => {
        setPage("Signup")
    }

    const handlePageToLogin = () => {
        setPage("Login");
    }

    const handlePageToBoard = (userId) => {
        setPage("Board");
        setUserId(userId);
    }

    const handlePageToProfile = () => {
        setPage("Profile");
    }

    return (
        <div>
            {page === "Login" ? <LoginForm handlePageToSignup = {handlePageToSignup} handlePageToBoard = {handlePageToBoard} /> : null}
            {page === "Board" ? <Board handlePageToLogin = {handlePageToLogin} handlePageToProfile = {handlePageToProfile} userId = {userId}/> : null}
            {page === "Signup" ? <SignupForm handlePageToLogin = {handlePageToLogin} /> : null}
            {page === "Profile" ? <Profile handlePageToBoard = {handlePageToBoard} /> : null}
        </div>
    )
}



export default Homepage;