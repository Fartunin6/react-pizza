export const addPizzaToCart = (pizza) => {
  return {
    type: 'ADD_PIZZA_TO_CART',
    payload: pizza,
  };
};

export const removePizza = (id) => {
  return {
    type: 'REMOVE_PIZZA',
    payload: id,
  };
};

export const plusPizza = (id) => {
  return {
    type: 'PLUS_PIZZA',
    payload: id,
  };
};

export const minusPizza = (id) => {
  return {
    type: 'MINUS_PIZZA',
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};
