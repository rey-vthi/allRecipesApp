import React, {useState} from 'react';
import recipeAPI from './recipeAPI';
import InputBox from './InputBox';
import List from './List';
const InputPanel = function(props) {
  return (
    <div className="dish-name-panel">
      <div className="field">
        <span>{props.text}: </span>
      </div>
      <div className={props.style}>
        <input
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        ></input>
      </div>
    </div>
  );
};

const Options = function(props) {
  return (
    <div className="left-header">
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

const ListAdder = function(props) {
  return (
    <div>
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

const RecipeAdder = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('breakfast');

  const updateValue = function(event, setState) {
    const txt = event.target.value;
    setState(txt);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append('steps', steps);
    data.append('ingredients', ingredients);
    recipeAPI.addNewRecipe(data);
  };

  const updateIngredients = text => {
    setIngredients(ingredients => ingredients.concat(text));
  };

  const updateSteps = text => {
    setSteps(steps => steps.concat(text));
  };

  return (
    <div className="recipe-form">
      <form onSubmit={handleSubmit}>
        <InputPanel
          style="dish-name"
          name="name"
          text="Dish"
          onChange={e => updateValue(e, setName)}
          value={name}
        />
        <Options
          text="Category"
          name="category"
          value={category}
          onChange={e => updateValue(e, setCategory)}
        />
        <ListAdder
          onEnter={updateIngredients}
          list={ingredients}
          text="Ingredients: "
        />
        <ListAdder onEnter={updateSteps} text="Steps: " list={steps} />
        <div style={{display: 'flex'}}>
          <div className="field">
            <div>
              <span>Description: </span>
            </div>
          </div>

          <div>
            <input
              name="description"
              onChange={e => updateValue(e, setDescription)}
              value={description}
            ></input>
          </div>
        </div>
        <span style={{paddingRight: '9vw'}}>Image:</span>
        <input type="file" name="file"></input>
        <p></p>
        <button>Add</button>
      </form>
    </div>
  );
};
export default RecipeAdder;
