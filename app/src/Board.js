// import React from 'react';
import PublicBoard from './PublicBoard';
import './Board.css';
import saturn from './saturn.jpeg';
import React, { useState } from 'react';
import FriendsList from './FriendsList';


function Board(props) {

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [search, setSearch] = useState('');

  const handlePageToLogin = () => {
    props.handlePageToLogin();
  };

  const handlePageToProfile = () => {
    props.handlePageToProfile();
  };

  const handlePageToMessage = () => {
    props.handlePageToMessage();
  };

  const handlePageToMyPosts = () => {
    props.handlePageToMyPosts();
  };

  const handleProfileMenuHover = () => {
    setShowProfileMenu(true);
  };

  const handleProfileMenuLeave = () => {
    setShowProfileMenu(false);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearch('');
  };


  return (
      <div className="Board">
        <div className="header">
          <img src={saturn} alt="Logo" className="logo"/>
          <h1 className="titleLogo">GRAVITY</h1>
        </div>

        <div className="menu">
          <div className="profileMenu">
            <span className="menutext" onClick={handlePageToProfile} onMouseEnter={handleProfileMenuHover}
                  onMouseLeave={handleProfileMenuLeave}>Profile</span>
            {showProfileMenu && (
                <div className="profileMenuDropdown" onMouseEnter={handleProfileMenuHover}
                     onMouseLeave={handleProfileMenuLeave}>
                  <div className="profileMenuItem" onClick={handlePageToLogin} onMouseEnter={handleProfileMenuHover}
                       onMouseLeave={handleProfileMenuLeave}>
                    Logout
                  </div>
                </div>
            )}
            <span className="menutext" onClick={handlePageToMessage}>Message</span>
            <span className="menutext" onClick={handlePageToMyPosts}>MyPosts</span>
            <form onSubmit={handleSearchSubmit} class="search-form">
              <input
                  type="text"
                  placeholder="Search for users or content"
                  value={search}
                  onChange={handleSearchChange}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>

        <div className="forms-right">
          <PublicBoard userId={props.userId}/>
        </div>
        <div className="forms-left">
          <FriendsList/>
        </div>
      </div>
  );
}

document.body.className = 'Board';


export default Board;
