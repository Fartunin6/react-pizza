export const addPizzaToCart = (pizza) => {
  return {
    type: 'ADD_PIZZA_TO_CART',
    payload: pizza,
  };
};
