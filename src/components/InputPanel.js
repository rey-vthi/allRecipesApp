import React from 'react';

const InputPanel = function(props) {
  return (
    <div className="dish-name-panel">
      <div className="field">
        <span>{props.text}: </span>
      </div>
      <div className={props.styler}>
        <input
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        ></input>
      </div>
    </div>
  );
};

export default InputPanel;