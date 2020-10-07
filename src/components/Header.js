import React from 'react';
import '../App.css';
import Image from './Image';
import {Link} from 'react-router-dom';

const Header = function(props) {
  return (
    <div className="header">
      <div className="left-header">
        <Link to="/">
          <Image className="logo" path="/logo.png" />
        </Link>
        <div>
          <h2 style={{color: 'orange', marginTop: '3vw'}}>AllRecipes</h2>
        </div>
      </div>
      <div className="right-panel">
        <Link to="/recipes/add">
          <Image className="logo" path="/addIcon.png"></Image>
        </Link>
        <Link to="/user/profile">
          <Image className="logo" path="/profile.png" />
        </Link>
        <img
          src="/logout.png"
          alt="NA"
          className="logout"
          onClick={props.handleLogout}
        ></img>
      </div>
    </div>
  );
};

export default Header;
