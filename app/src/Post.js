import './Post.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";

function Post(props) {
    const [user, setUser] = useState("");
    const [content, setContent] = useState("");

    const getUserName = () => {
        const getUserName = axios.create({
            baseURL: `http://localhost:8000/users/${props.post.user}`,
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        })

        getUserName.get("")
            .then(res => {
                setUser(res.data.name);
                setContent(props.post.post);
            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(getUserName);




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
        <span className = "user">{user} :</span>
        <div className="post-container">
        {content}
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
    