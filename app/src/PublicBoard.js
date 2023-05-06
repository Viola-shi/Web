import React, { useState } from 'react';
import "./PublicBoard.css";

function PublicBoard(props) {
  const [announcement, setAnnouncement] = useState('');

  const handleAnnouncementChange = (event) => {
    setAnnouncement(event.target.value);
  };


  const handleAnnouncementSubmit = (event) => {
    event.preventDefault();
    setAnnouncement('');
  };

  return (
    <div className="public-board">
      <div className="public-board-container">
        <div className="public-board-header">
          <span className = "board-title">Public Board</span>
        </div>
        <div className="public-board-frame">
        {}
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
