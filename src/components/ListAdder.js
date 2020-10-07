import React from 'react';
import InputBox from './InputBox';
import List from './List';

const ListAdder = function(props) {
  return (
    <div className="multiple-input">
      <div style={{display: 'flex'}}>
        <div className="field">
          <div>
            <span>{props.text} </span>
          </div>
        </div>
        {props.list ? <List list={props.list} /> : ''}
      </div>
      <InputBox onEnter={props.onEnter} value=""></InputBox>
    </div>
  );
};

export default ListAdder;
