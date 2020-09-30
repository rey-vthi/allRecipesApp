import React from 'react';
import '../App.css';
import Image from './Image';
import {Link} from 'react-router-dom';

const InformationPanel = function(props) {
  return (
    <div className="left-header">
      <Link to="/">
        <Image className="logo" path={props.path} />
      </Link>
      <div>
        <h2 style={{color: 'orange', marginTop: '3vw'}}>{props.name}</h2>
      </div>
    </div>
  );
};

const Header = function(props) {
  return (
    <div className="header">
      <InformationPanel
        path="/logo.png"
        className="app-name"
        name="AllRecipes"
      />
      <div className="right-panel">
        <Link to="/recipes/add">
          <Image className="logo" path="/addIcon.png"></Image>
        </Link>
        <Link to="/user/profile">
          <Image className="logo" path="/profile.png" />
        </Link>
        <span onClick={props.handleLogout}>Logout</span>
      </div>
    </div>
  );
};

export default Header;
