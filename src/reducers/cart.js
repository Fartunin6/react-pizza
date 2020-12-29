const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART': {
      const currentPizzaItems = state.items[action.payload.id]
        ? [...state.items[action.payload.id].items, action.payload]
        : [action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      //const items = Object.values(newItems).map((obj) => obj.items);
      //const addedPizzas = Object.values(items).flat();

      //totalPrice: getTotalPrice(addedPizzas)
      //totalCount: addedPizzas.length

      return {
        items: newItems,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + newItems[action.payload.id].items[0].price,
      };
    }

    case 'REMOVE_PIZZA': {
      const newItems = { ...state.items };
      const currentItem = newItems[action.payload];

      delete newItems[action.payload];

      return {
        items: newItems,
        totalPrice: state.totalPrice - currentItem.totalPrice,
        totalCount: state.totalCount - currentItem.items.length,
      };
    }

    case 'PLUS_PIZZA': {
      const newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];

      return {
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
        totalPrice: state.totalPrice + newItems[0].price,
        totalCount: state.totalCount + 1,
      };
    }

    case 'MINUS_PIZZA': {
      const oldItems = [...state.items[action.payload].items];
      const newItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;

      return {
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
        totalCount: oldItems.length > 1 ? state.totalCount - 1 : state.totalCount,
        totalPrice: oldItems.length > 1 ? state.totalPrice - newItems[0].price : state.totalPrice,
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

export default cart;
