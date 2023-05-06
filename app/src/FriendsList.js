import React, { useState } from 'react';
import "./FriendsList.css";

function FriendsList(props) {
    const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  return (
    <div className="friends-list">
        <div className="friends-list-container">
        <span className = "friend-title">Friends List</span>
        <div className="friends-list-frame">
        {friends}
        </div>
        </div>
    </div>
  );
}
    
  
  export default FriendsList;
  