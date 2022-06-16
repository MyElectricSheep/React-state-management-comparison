import {
  ITEM_ADDED,
  ITEM_REMOVED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Yummy Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  switch (action.type) {
    case ITEM_ADDED: {
      const newItem = { uuid: id++, quantity: 1, ...action.payload };
      return [...state, newItem];
    }
    case ITEM_REMOVED: {
      return state.filter((item) => item.uuid !== action.payload.uuid);
    }
    case ITEM_PRICE_UPDATED: {
      // Take 1 (too complex):
      // const targetItem = {
      //   ...state.find((item) => item.uuid === action.payload.uuid)
      // };
      // targetItem.price = action.payload.price;
      // return [
      //   ...state.filter((item) => item.uuid !== action.payload.uuid),
      //   targetItem
      // ];

      // Take 2 (better):
      return state.map((item) => {
        if (item.uuid === action.payload.uuid) {
          return { ...item, price: action.payload.price };
        } else {
          return item;
        }
      });
    }
    case ITEM_QUANTITY_UPDATED: {
      return state.map((item) => {
        if (item.uuid === action.payload.uuid) {
          return { ...item, quantity: action.payload.quantity };
        } else {
          return item;
        }
      });
    }
    default:
      return state;
  }
};

export default reducer;
