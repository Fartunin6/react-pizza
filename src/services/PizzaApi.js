import axios from 'axios';

const API = {
  async getPizzas(category) {
    const data = await axios.get('http://localhost:3000/db.json');
    return data.data.pizzas;
  },
};

export default API;
