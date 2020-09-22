import React, {useState} from 'react';

const RecipeAdder = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const updateValue = function(event, setState) {
    const txt = event.target.value;
    setState(txt);
  };

  const onChange = event => {
    const [image] = event.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      setFile(`url(${reader.result})`);
    };
    if (image) {
      reader.readAsDataURL(image);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('http://localhost:3001/api/addNewRecipe', {
      method: 'POST',
      body: data
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Dish name: </span>
      <input
        name="dishName"
        onChange={e => updateValue(e, setName)}
        value={name}
      ></input>
      <span>Ingredients: </span>
      <input
        name="ingredients"
        onChange={e => updateValue(e, setIngredients)}
        value={ingredients}
      ></input>
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
      <div style={{content: file, width: '500px'}}></div>
      <input type="file" name="file" onChange={onChange}></input>
      <button>submit</button>
    </form>
  );
};
export default RecipeAdder;
