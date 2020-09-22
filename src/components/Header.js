import React from 'react';
import '../App.css';
import Image from './Image';
import {Link} from 'react-router-dom';

const InformationPanel = function(props) {
  return (
    <div className="left-header">
      <Image className="logo" path={props.path} />
      <div>
        <p className={props.style}>{props.name}</p>
      </div>
    </div>
  );
};

const Header = function(props) {
  return (
    <div className="header">
      <InformationPanel path="/logo.png" style="app-name" name="AllRecipes" />
      <div className="right-panel">
        <Link to="/add">Add</Link>
        <InformationPanel path="/profile.png" style="user" name="Revathi" />
      </div>
    </div>
  );
};

export default Header;
