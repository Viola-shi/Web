import React from 'react';
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Board from './Board';
import Profile from './Profile';
import Message from './Message';
import MyPosts from './MyPosts';
import Background from './background';

const Homepage = () => {

    const [page, setPage] = useState("Login");

    const handlePageToSignup = () => {
        setPage("Signup")
    }

    const handlePageToLogin = () => {
        setPage("Login");
    }

    const handlePageToBoard = () => {
        setPage("Board");
    }

    const handlePageToProfile = () => {
        setPage("Profile");
    }

    const handlePageToMessage = () => {
        setPage("Message");
    }

    const handlePageToMyPosts = () => {
        setPage("MyPosts");
    }

    return (
        <div>
            {page === "Login" ? <LoginForm handlePageToSignup = {handlePageToSignup} handlePageToBoard = {handlePageToBoard} /> : null}
            {page === "Board" ? <Board handlePageToLogin = {handlePageToLogin} handlePageToProfile = {handlePageToProfile} handlePageToMessage = {handlePageToMessage} handlePageToMyPosts = {handlePageToMyPosts}/> : null}
            {page === "Signup" ? <SignupForm handlePageToLogin = {handlePageToLogin} /> : null}
            {page === "Profile" ? <Profile handlePageToBoard = {handlePageToBoard} /> : null}
            {page === "Message" ? <Message handlePageToBoard = {handlePageToBoard} /> : null}
            {page === "MyPosts" ? <MyPosts handlePageToBoard = {handlePageToBoard} /> : null}
        </div>
    )
}



export default Homepage;