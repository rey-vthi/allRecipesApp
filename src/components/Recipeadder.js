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

const RecipeAdder = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('breakfast');
  const [file, setFile] = useState(false);
  const [status, setStatus] = useState();

  const updateValue = function(event, setState) {
    const txt = event.target.value;
    setState(txt);
  };

  const handleSubmit = event => {
    if (
      name !== '' &&
      ingredients.length !== 0 &&
      steps.length !== 0 &&
      description !== '' &&
      file !== null &&
      category
    ) {
      setStatus('Added Successfully');
      event.preventDefault();
      const data = new FormData(event.target);
      data.append('steps', steps);
      data.append('ingredients', ingredients);
      recipeAPI.addNewRecipe(data);
    }
  };

  const updateIngredients = text => {
    if (text !== '') setIngredients(ingredients => ingredients.concat(text));
  };

  const updateSteps = text => {
    if (text !== '') setSteps(steps => steps.concat(text));
  };

  return (
    <div className="recipe-form">
      <form onSubmit={handleSubmit}>
        <InputPanel
          styler="dish-name"
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
        <div className="description-box">
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
        <input type="file" name="file" onChange={() => setFile(true)}></input>
        <p></p>
        <div>
          <button className="submit-button">Add</button>
        </div>
      </form>
      <div className="status">{status}</div>
    </div>
  );
};
export default RecipeAdder;
