import React from 'react';
const Recipe = function(props) {
  return (
    <div className="recipe">
      <div className="dish-picture">
        <img src={props.image} alt="NA"></img>
      </div>
      <h2>{props.name}</h2>
      <span>{props.description}</span>
    </div>
  );
};

export default Recipe;
