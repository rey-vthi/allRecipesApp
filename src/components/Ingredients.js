import React from 'react';

const Ingredients = function(props) {
  const list = props.list.map((i, index) => (
    <div key={index}>
      <li>{i}</li>
    </div>
  ));
  return <ul className="ingredients">{list}</ul>;
};

export default Ingredients;
