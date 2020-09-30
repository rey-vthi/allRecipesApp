import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = function() {
  const div = (
    <div className="menu-bar">
      <div className="menu">
        <NavLink
          exact
          to="/"
          activeClassName="selected"
          className="not-selected"
        >
          All
        </NavLink>
      </div>
      <div className="menu">
        <NavLink
          to="/recipes/salad"
          activeClassName="selected"
          className="not-selected"
        >
          Salad
        </NavLink>
      </div>
      <div className="menu">
        <NavLink
          to="/recipes/juice"
          activeClassName="selected"
          className="not-selected"
        >
          Juice
        </NavLink>
      </div>
      <div className="menu">
        <NavLink
          to="/recipes/breakfast"
          activeClassName="selected"
          className="not-selected"
        >
          Breakfast
        </NavLink>
      </div>
      <div className="menu">
        <NavLink
          to="/recipes/lunch"
          activeClassName="selected"
          className="not-selected"
        >
          Lunch
        </NavLink>
      </div>
    </div>
  );
  return div;
};

export default Menu;
