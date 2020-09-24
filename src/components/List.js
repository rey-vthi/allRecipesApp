import React from 'react';

const List = function(props) {
  const list = props.list.map((i, index) => (
    <div key={index}>
      <li>{i}</li>
    </div>
  ));
  return <ul>{list}</ul>;
};

export default List;
