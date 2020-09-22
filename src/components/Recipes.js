import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import recipeAPI from './recipeAPI';
import Header from './Header';
import '../App.css';
import Menu from './Menu';
import Recipe from './Recipe';
import RecipeAdder from './Recipeadder';

const FilteredRecipes = function(props) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    recipeAPI.getAllRecipes(props.category).then(setRecipes);
  }, [props]);
  return recipes.map((recipe, index) => (
    <Recipe name={recipe.name} description={recipe.description} key={index} />
  ));
};

const Recipes = function() {
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
        <Route path="/add">
          <RecipeAdder />
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
      </Switch>
    </BrowserRouter>
  );
};

export default Recipes;
