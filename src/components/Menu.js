import React from 'react';
import {Link} from 'react-router-dom';

const Menu = function() {
  const div = (
    <div className="menu">
      <div>
        <Link to="/">All</Link>
      </div>
      <div>
        <Link to="/recipes/salad">Salad</Link>
      </div>
      <div>
        <Link to="/recipes/juice">Juice</Link>
      </div>
      <div>
        <Link to="/recipes/breakfast">Breakfast</Link>
      </div>
      <div>
        <Link to="/recipes/lunch">Lunch</Link>
      </div>
    </div>
  );
  return div;
};

export default Menu;
