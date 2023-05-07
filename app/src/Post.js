import './Post.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";

function Post(props) {

    const [user, setUser] = useState("");
    const [content, setContent] = useState(props.post.post);
    const [isLiked, setIsLiked] = useState(props.post.likes.includes(props.userId));
    const [likeCount, setLikeCount] = useState(props.post.likes.length);

    const getUserName = () => {
        const getUserName = axios.create({
            baseURL: `http://localhost:8000/users/${props.post.user}`,
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        })

        getUserName.get("")
            .then(res => {
                setUser(res.data.name);
            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(getUserName);


  
    const handleLikeClick = () => {
        const likePost = axios.create({
            baseURL: `http://localhost:8000/publicPosts/${props.post._id}/api/like/`,
            timeout: 10000,
            headers: {'X-Custom-Header': 'foobar'}
        })


        const userLike = {
            userId: props.userId
        }

        likePost.post("", userLike)
            .then(res => {
                setLikeCount(res.data.likes.length);
                setIsLiked(res.data.isLiked);
            })

            .catch(e => {
                console.log(e);
            })
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
    