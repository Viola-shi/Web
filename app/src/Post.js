import './Post.css';
import React, { useState } from 'react';

function Post(props) {

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
  
    const handleLikeClick = () => {
        if (!isLiked) {
        setLikeCount(likeCount + 1);
        } else {
        setLikeCount(likeCount - 1);
        }
        setIsLiked(!isLiked);
    }

    return (
    <div className="Post">
        <span className = "user">User Name :</span>
        <div className="post-container">
        {'shdubushnfdxijd'}
        </div>
        <div className="like-button-container">
            <button className="like-button" onClick={handleLikeClick}>
            {isLiked ? '❤️' : '🤍'}
            {likeCount}
            </button>
        </div>
    </div>
    )
}

document.body.className = 'Post';


export default Post;
    