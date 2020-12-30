export const hostname = window.location.hostname;
export const api = {
  localhost: 'http://localhost:5000/api',
  'react-pizzass.herokuapp.com': 'https://react-pizzass.herokuapp.com',
};

const apiBase = api[hostname];

export default apiBase;
