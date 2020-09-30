import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import FilteredRecipes from './FilteredRecipes';
import Header from './Header';
import '../App.css';
import Menu from './Menu';
import Profile from './Profile';

import RecipeAdder from './Recipeadder';
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
    <div>
      <h1>{name}</h1>
      <img className="recipe-full-picture" src={path} alt="NA" />
      <p>{description}</p>
      <p>
        By <span className="by-name">{by}</span>
      </p>
      ingredients:<List list={ingredients}></List>
      Steps: <List list={steps}></List>
      Category:<p>{category}</p>
    </div>
  );
};

const Recipes = function(props) {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
          <Menu />
          <FilteredRecipes category="ALL" />
        </Route>
        <Route path="/recipes/salad">
          <Menu />
          <FilteredRecipes category="SALAD" />
        </Route>
        <Route path="/recipes/juice">
          <Menu />
          <FilteredRecipes category="JUICE" />
        </Route>
        <Route path="/recipes/breakfast">
          <Menu />
          <FilteredRecipes category="BREAKFAST" />
        </Route>
        <Route path="/recipes/lunch">
          <Menu />
          <FilteredRecipes category="LUNCH" />
        </Route>
        <Route path="/recipes/add">
          <RecipeAdder />
        </Route>
        <Route path="/user/profile">
          <Profile />
        </Route>
        <Route path="/recipe/:recipeId">
          <ShowRecipe></ShowRecipe>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Recipes;
