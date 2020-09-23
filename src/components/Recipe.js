import React from 'react';
const Recipe = function(props) {
  const path = `/api${props.path}`;
  return (
    <div className="recipe">
      <img src={path} className="recipe-image" alt="NA"></img>
      <div class="content">
        <h2>{props.name}</h2>
        <span>{props.description}</span>
        <p>
          By <span className="by-name">{props.by}</span>
        </p>
      </div>
    </div>
  );
};

export default Recipe;
