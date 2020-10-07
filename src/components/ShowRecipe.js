import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import recipeAPI from './recipeAPI';
import List from './List';

const ShowRecipe = function() {
  const {recipeId} = useParams();
  const [name, setName] = useState();
  const [by, setBy] = useState();
  const [steps, setSteps] = useState([]);
  const [description, setDescription] = useState();
  const [url, setUrl] = useState();
  const [category, setCategory] = useState();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    recipeAPI.getRecipe(recipeId).then(([recipe]) => {
      setName(recipe.name);
      setBy(recipe.by);
      setSteps(recipe.steps);
      setUrl(recipe.path);
      setCategory(recipe.category);
      setIngredients(recipe.ingredients);
      setDescription(recipe.description);
      setCategory(recipe.category);
    });
  }, [recipeId]);

  const path = `/api${url}`;
  return (
    <div className="recipe-container">
      <div>
        <h1>{name}</h1>
        <img style={{width: '20vw'}} src={path} alt="NA" />
      </div>
      <div>
        <div>
          <span className="heading">Category: </span>
          <span>{category}</span>
        </div>
        <div>
          <span className="heading">ingredients:</span>
          <List list={ingredients}></List>
        </div>
        <div>
          <span className="heading">Steps:</span> <List list={steps}></List>
        </div>
        <p className="description-content">{description}</p>
        <span className="by">By</span> <span className="by-name">{by}</span>
      </div>
    </div>
  );
};

export default ShowRecipe;
