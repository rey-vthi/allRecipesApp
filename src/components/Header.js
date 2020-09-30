import React from 'react';
import '../App.css';
import Image from './Image';
import {Link} from 'react-router-dom';
import InformationPanel from './InformationPanel'

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
