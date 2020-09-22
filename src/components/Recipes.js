import React, {useState, useEffect} from 'react';
import recipeAPI from './recipeAPI';
import Header from './Header';
import '../App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

const Recipe = function(props) {
  return (
    <div className="recipe">
      <div className="dish-picture">
        <img src={props.image} alt="NA"></img>
      </div>
      <h2>{props.name}</h2>
      <span>{props.description}</span>
    </div>
  );
};

const Menu = function(props) {
  const div = (
    <div className="menu">
      <div>
        <Link to="/">All</Link>
      </div>
      <div>
        <Link to="/recipes/salad">Salad</Link>
      </div>
      <div>
        <Link to="/recipes/juice">Juice</Link>
      </div>
      <div>
        <Link to="/recipes/breakfast">Breakfast</Link>
      </div>
      <div>
        <Link to="/recipes/lunch">Lunch</Link>
      </div>
    </div>
  );
  return div;
};

const Recipes = function() {
  const [recipes, setRecipes] = useState([]);
  const [recipeType, setRecipeType] = useState('ALL');

  useEffect(() => {
    recipeAPI.getAllRecipes(recipeType).then(setRecipes);
  }, [recipeType]);

  const div = recipes.map((r, index) => (
    <Recipe name={r.name} description={r.description} key={index} />
  ));
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Menu />
      </div>
      <Switch>
        <Route exact path="/">
          <div>{div}</div>
        </Route>
        <Route path="/add">
          <p>Add</p>
        </Route>
        <Route
          path="/recipes/salad"
          render={() => {
            setRecipeType('SALAD');
            return <div>{div}</div>;
          }}
        ></Route>
        <Route
          path="/recipes/juice"
          render={() => {
            setRecipeType('JUICE');
            return <div>{div}</div>;
          }}
        ></Route>
        <Route
          path="/recipes/breakfast"
          render={() => {
            setRecipeType('BREAKFAST');
            return <div>{div}</div>;
          }}
        ></Route>
        <Route
          path="/recipes/lunch"
          render={() => {
            setRecipeType('LUNCH');
            return <div>{div}</div>;
          }}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Recipes;
