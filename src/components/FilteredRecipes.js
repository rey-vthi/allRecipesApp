import React, {useState, useEffect} from 'react';
import recipeAPI from './recipeAPI';
import Recipe from './Recipe';

const FilteredRecipes = function(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeAPI.getAllRecipes(props.category).then(setRecipes);
  }, [props]);

  const div = recipes.map((recipe, index) => (
    <Recipe
      name={recipe.name}
      description={recipe.description}
      key={index}
      by={recipe.by}
      id={recipe.recipeId}
      path={recipe.path}
    />
  ));
  return <div className="recipes">{div}</div>;
};

export default FilteredRecipes;
