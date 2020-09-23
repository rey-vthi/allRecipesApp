import React, {useState} from 'react';
import recipeAPI from './recipeAPI';
import InputBox from './InputBox';
import Ingredients from './Ingredients';
const InputPanel = function(props) {
  return (
    <div>
      <span>{props.text}: </span>
      <input
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      ></input>
    </div>
  );
};

const Options = function(props) {
  return (
    <div>
      <span>{props.text}: </span>
      <select name={props.name} value={props.value} onChange={props.onChange}>
        <option value="breakfast">Breakfast</option>
        <option value="salad">Salad</option>
        <option value="juice">Juice</option>
        <option value="lunch">Lunch</option>
      </select>
    </div>
  );
};

const RecipeAdder = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState('');
  const [description, setDescription] = useState('');
  // const [file] = useState();
  const [category, setCategory] = useState('breakfast');

  const updateValue = function(event, setState) {
    const txt = event.target.value;
    setState(txt);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    recipeAPI.addNewRecipe(data);
  };

  const updateIngredients = text => {
    setIngredients(ingredients => ingredients.concat(text));
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputPanel
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
      <span>Ingredients: </span>
      {ingredients ? <Ingredients list={ingredients} /> : ''}
      <InputBox
        className="ingredients"
        onEnter={updateIngredients}
        value=""
      ></InputBox>
      <span>Steps: </span>
      <input
        name="steps"
        onChange={e => updateValue(e, setSteps)}
        value={steps}
      ></input>
      <span>Description: </span>
      <input
        name="description"
        onChange={e => updateValue(e, setDescription)}
        value={description}
      ></input>
      {/* <div style={{cb vontent: file, width: '500px'}}></div> */}
      <input type="file" name="file"></input>
      <button>submit</button>
    </form>
  );
};
export default RecipeAdder;
