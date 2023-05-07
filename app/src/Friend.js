import './Friend.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";

function Friend(props) {

    const [user, setUser] = useState("");

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

    return (
    <div className="Friend">
        <div className="friend-container">
        {user}
        </div>
    </div>
    )
}

document.body.className = 'Friend';


export default Friend;
    