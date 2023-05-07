import React, {useEffect, useState} from 'react';
import "./FriendsList.css";
import Friend from './Friend';
import axios from "axios";

function FriendsList(props) {
    const [friends, setFriends] = useState([]);

    const getFriends = () => {
        const getFriends = axios.create({
            baseURL: `http://localhost:8000/users/${props.userId}`,
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        })

        getFriends.get("")
            .then(res => {
                setFriends(res.data.friends);
            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(getFriends)

    return (
        <div className="friends-list">
            <div className="friends-list-container">
                <span className="friend-title">Friends List</span>
                <div className="friends-list-frame">
                    {friends.map(friend => (<Friend friend={friend}/>))}
                </div>
            </div>
        </div>
    );
}
    
  
  export default FriendsList;
  