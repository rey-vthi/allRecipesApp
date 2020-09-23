import React, {useState} from 'react';

const InputBox = function(props) {
  const [text, setText] = useState(props.value);

  const updateText = function(event) {
    const txt = event.target.value;
    setText(txt);
  };

  const addTodo = function(event) {
    if (text !== '' || event.keyCode !== 13) {
      props.onEnter(text);
      setText('');
    }
  };

  return (
    <div className="adder">
      <div>
        <input onChange={updateText} value={text}></input>
      </div>
      <div>
        <img
          src="/addIcon.png"
          alt="NA"
          onClick={addTodo}
          className="add-icon"
        />
      </div>
    </div>
  );
};

export default InputBox;
