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




    return (
    <div className="Post">
        <span className = "user">{user} :</span>
        <div className="post-container">
        {content}
        </div>
    </div>
    )
}

document.body.className = 'Post';


export default Post;
    