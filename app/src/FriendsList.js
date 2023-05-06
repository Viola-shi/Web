import React, { useState } from 'react';
import "./FriendsList.css";

function FriendsList(props) {
    const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  return (
    <div className="friends-list">
        <div className="friends-list-container">
        <span className = "friend-title">Friends List</span>
        <ul>
            {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
            ))}
        </ul>
        </div>
    </div>
  );
}
    
  
  export default FriendsList;
  