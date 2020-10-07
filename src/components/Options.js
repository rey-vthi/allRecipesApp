import React from 'react';

const Options = function(props) {
  return (
    <div className="category-adder">
      <div className="field">
        <span>{props.text}: </span>
      </div>
      <div>
        <select name={props.name} value={props.value} onChange={props.onChange}>
          <option className="options" value="breakfast">
            Breakfast
          </option>
          <option value="salad">Salad</option>
          <option value="juice">Juice</option>
          <option value="lunch">Lunch</option>
        </select>
      </div>
    </div>
  );
};

export default Options;
