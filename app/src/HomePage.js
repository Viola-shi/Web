import React from 'react';
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Board from './Board';
import Profile from './Profile';
import Message from './Message';
import MyPosts from './MyPosts';

const Homepage = () => {

    const [page, setPage] = useState("Login");
    const [userId, setUserId] = useState("");

    const handlePageToSignup = () => {
        setPage("Signup")
    }

    const handlePageToLogin = () => {
        setPage("Login");
    }

    const handlePageToBoardWithId = (userId) => {
        setPage("Board");
        setUserId(userId);
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
            {page === "Login" ? <LoginForm handlePageToSignup={handlePageToSignup} handlePageToBoard={handlePageToBoardWithId}
                                           userId={userId}/> : null}
            {page === "Board" ? <Board handlePageToLogin={handlePageToLogin} handlePageToProfile={handlePageToProfile}
                                       handlePageToMessage={handlePageToMessage}
                                       handlePageToMyPosts={handlePageToMyPosts} userId={userId}/> : null}
            {page === "Signup" ? <SignupForm handlePageToLogin={handlePageToLogin}/> : null}
            {page === "Profile" ? <Profile handlePageToBoard={handlePageToBoard} userId={userId}/> : null}
            {page === "Message" ? <Message handlePageToBoard={handlePageToBoard}/> : null}
            {page === "MyPosts" ? <MyPosts handlePageToBoard={handlePageToBoard}/> : null}
        </div>
    );
}



export default Homepage;