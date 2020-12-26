import API from '../services/PizzaApi';

const setPizzas = (pizzas) => {
  return {
    type: 'SET_PIZZAS',
    payload: pizzas,
  };
};

const setLoading = (isLoading) => {
  return {
    type: 'SET_LOADING',
    payload: isLoading,
  };
};

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoading(true));
  API.getPizzas(category, sortBy).then((data) => dispatch(setPizzas(data)));
};
