import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = function() {
  const div = (
    <div className="menu-bar">
      <div className="menu">
        <NavLink exact to="/" activeClassName="selected">
          All
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to="/recipes/salad" activeClassName="selected">
          Salad
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to="/recipes/juice" activeClassName="selected">
          Juice
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to="/recipes/breakfast" activeClassName="selected">
          Breakfast
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to="/recipes/lunch" activeClassName="selected">
          Lunch
        </NavLink>
      </div>
    </div>
  );
  return div;
};

export default Menu;
