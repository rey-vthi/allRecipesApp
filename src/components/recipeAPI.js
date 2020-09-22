const postReq = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
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

export default {
  getAllRecipes
};
