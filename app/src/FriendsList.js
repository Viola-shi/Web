import React, { useState } from 'react';
import "./FriendsList.css";
import Friend from './Friend';

function FriendsList(props) {
    const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  return (
    <div className="friends-list">
        <div className="friends-list-container">
        <span className = "friend-title">Friends List</span>
        <div className="friends-list-frame">
        <Friend/>
        </div>
        </div>
    </div>
  );
}
    
  
  export default FriendsList;
  