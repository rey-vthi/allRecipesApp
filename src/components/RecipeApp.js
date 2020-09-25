import React, {useState, useEffect} from 'react';
import recipeAPI from './recipeAPI';
import Recipes from './Recipes';

const Login = function() {
  return <a href="http://localhost:3001/api/signIn">Login through Github</a>;
};

const RecipeApp = function() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    recipeAPI.isLoggedIn().then(({status}) => setLoggedIn(status));
  }, []);
  const div = isLoggedIn ? <Recipes /> : <Login />;
  return div;
};

export default RecipeApp;
