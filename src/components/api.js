const postReq = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data
  });
};

const getAllRecipes = type => {
  switch (type) {
    case 'ALL':
      return fetch('/api/getAllRecipes').then(res => res.json());
    case 'SALAD':
      return fetch('/api/getAllSalads').then(res => res.json());
    case 'JUICE':
      return fetch('/api/getAllJuice').then(res => res.json());
    case 'BREAKFAST':
      return fetch('/api/getAllBreakFast').then(res => res.json());
    case 'LUNCH':
      return fetch('/api/getAllLunch').then(res => res.json());
  }
};

const addNewRecipe = data => {
  return postReq('/api/addNewRecipe', data);
};

const isLoggedIn = () => {
  return fetch('/api/isLoggedIn').then(res => res.json());
};

const getProfile = () => {
  return fetch('/api/profile').then(res => res.json());
};

const getOthers = () => {
  return fetch('/api/others').then(res => res.json());
};

const getRecipe = id => {
  return fetch(`/api/getRecipe/${id}`).then(res => res.json());
};

const getUser = () => {
  return fetch('/api/user').then(res => res.json());
};

const logout = () => {
  return postReq('/api/logout');
};

export default {
  getAllRecipes,
  addNewRecipe,
  isLoggedIn,
  getProfile,
  getOthers,
  getRecipe,
  getUser,
  logout
};
