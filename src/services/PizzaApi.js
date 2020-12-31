import axios from 'axios';

const API = {
  async getPizzas(category, sortBy) {
    const SORT_BY = `&_sort=${sortBy.type}&_order=${sortBy.order}`;
    const CATEGORY = `${category !== null ? `category=${category}` : ''}`;

    const data = await axios.get(`/pizzas?${CATEGORY}&${SORT_BY}`);
    return data.data;
  },
};

export default API;
