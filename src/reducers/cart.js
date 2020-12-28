const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const addedPizzas = [].concat.apply([], Object.values(newItems));

      return {
        ...state,
        items: newItems,
        totalCount: addedPizzas.length,
        totalPrice: addedPizzas.reduce((sum, obj) => sum + obj.price, 0),
      };
    }
    default:
      return state;
  }
};

export default cart;

// if the same pizza  - items = {id of pizza: [pizza1, pizza2]}
// if different pizza - items = {id of pizza: [pizza], id of pizza: [pizza]}

// can be  - items = {id of pizza: [pizza1, pizza2], id of pizza: [pizza], etc...}
