import React, { useState } from 'react';
import "./PublicBoard.css";
import axios from "axios";
import Post from "./Post" ;
import {useEffect} from "react";

function PublicBoard(props) {
  const [announcement, setAnnouncement] = useState('');
  const [posts, setPosts] = useState([]);

  const handleAnnouncementChange = (event) => {
    setAnnouncement(event.target.value);
  };


  const handleAnnouncementSubmit = (event) => {
    event.preventDefault();

    const post = {
        post: announcement,
        date: new Date()
    }

    const sendPost = axios.create({
        baseURL: `http://localhost:8000/users/${props.userId}/posts`,
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
    })

    sendPost.post("", post)
        .then(getPost)
        .catch(e => {
            console.log(e);
        })
  };

  function getPost() {
      const getPost = axios.create({
          baseURL: `http://localhost:8000/publicPosts`,
          timeout: 1000,
          headers: {'X-Custom-Header': 'foobar'}
      })

      getPost.get("")
          .then(res => {
              setPosts(res.data)
          })
          .catch(e => {
              alert(e.response.data.message);
          })
  }

  useEffect(getPost);


  return (
    <div className="public-board">
      <div className="public-board-container">
        <div className="public-board-header">
          <span className = "board-title">Public Board</span>
        </div>
        <div className="public-board-frame">
            {posts.map(post => (<Post post={post}/>))}
        </div>
      </div>
      <div className="public-board-announcements">
      <span className = "announcement-title">Announcements</span>
          <form onSubmit={handleAnnouncementSubmit}>
            <input
              type="text"
              placeholder="What's new?"
              value={announcement}
              onChange={handleAnnouncementChange}
              className="announcement-input"
            />
            <button type="submit" className="announcement-button">Post</button>
          </form>
          {/* TODO: Add logic to display announcements */}
        
      </div>
    </div>
  );
}

export default PublicBoard;
