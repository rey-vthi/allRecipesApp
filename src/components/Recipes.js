import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import FilteredRecipes from './FilteredRecipes';
import Header from './Header';
import '../App.css';
import Menu from './Menu';
import Profile from './Profile';
import ShowRecipe from './ShowRecipe';
import RecipeAdder from './Recipeadder';

const Recipes = function(props) {
  return (
    <BrowserRouter>
      <div>
        <Header handleLogout={props.handleLogout} />
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
        <Route path="/recipes/recipe/:recipeId">
          <ShowRecipe></ShowRecipe>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Recipes;
