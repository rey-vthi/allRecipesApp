import React from 'react';
import {Link} from 'react-router-dom';
const Recipe = function(props) {
  const path = `/api${props.path}`;
  return (
    <div className="recipe">
      <img src={path} className="recipe-image" alt="NA"></img>
      <div className="content">
        <Link to={`recipe/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
        <span>{props.description}</span>
        <p>
          By <span className="by-name">{props.by}</span>
        </p>
      </div>
    </div>
  );
};

export default Recipe;
