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
      fetch('/api/getAllSalads').then(res => res.json());
      break;
    case 'JUICE':
      fetch('/api/getAllJuice').then(res => res.json());
      break;
    case 'BREAKFAST':
      fetch('/api/getAllBreakFast').then(res => res.json());
      break;
    case 'LUNCH':
      fetch('/api/getAllLunch').then(res => res.json());
      break;
  }
};

export default {
  getAllRecipes
};
