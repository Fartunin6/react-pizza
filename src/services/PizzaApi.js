import axios from 'axios';
import apiBase from '../config';

const API = {
  async getPizzas(category, sortBy) {
    const SORT_BY = `&_sort=${sortBy.type}&_order=${sortBy.order}`;
    const CATEGORY = `${category !== null ? `category=${category}` : ''}`;

    const data = await axios.get(`${apiBase}'/pizzas'?${CATEGORY}&${SORT_BY}`);
    return data.data;
  },
};

export default API;
