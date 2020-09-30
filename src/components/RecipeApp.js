import React, {useState, useEffect} from 'react';
import recipeAPI from './recipeAPI';
import Recipes from './Recipes';

const Login = function() {
  const div = (
    <div>
      <h1>Recipe App</h1>
      <a href="https://github.com/login/oauth/authorize?client_id=1d0dd614acec505180d7">
        Login through Github
      </a>
    </div>
  );
  return div;
};

const RecipeApp = function() {
  const [login, setLogin] = useState({status: false});

  useEffect(() => {
    recipeAPI.isLoggedIn().then(setLogin);
  }, []);

  const div = login.status ? <Recipes /> : <Login />;
  return div;
};

export default RecipeApp;
