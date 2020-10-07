import React, {useState} from 'react';
import recipeAPI from './recipeAPI';
import InputPanel from './InputPanel';
import Options from './Options';
import ListAdder from './ListAdder';

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
