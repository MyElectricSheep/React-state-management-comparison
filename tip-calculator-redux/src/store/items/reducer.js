import {
  ITEM_ADDED,
  ITEM_REMOVED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED
} from './actions';

import produce from 'immer';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Yummy Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = produce((state = initialItems, action) => {
  switch (action.type) {
    case ITEM_ADDED: {
      const newItem = { uuid: id++, quantity: 1, ...action.payload };
      state.push(newItem);
      break;
    }

    case ITEM_REMOVED: {
      return state.filter((item) => item.uuid !== action.payload.uuid);
    }

    case ITEM_PRICE_UPDATED: {
      const targetItem = state.find(
        (item) => item.uuid === action.payload.uuid
      );
      targetItem.price = Number(action.payload.price);
      break;
    }

    case ITEM_QUANTITY_UPDATED: {
      const targetItem = state.find(
        (item) => item.uuid === action.payload.uuid
      );
      targetItem.quantity = Number(action.payload.quantity);
      break;
    }

    default:
      break;
  }
}, initialItems);

// With if/else syntax:
// export const reducer = produce((state = initialItems, action) => {
//     if (action.type === ITEM_ADDED) {
//       const item = {
//         uuid: id++,
//         quantity: 1,
//         name: action.payload.name,
//         price: parseInt(action.payload.price, 10)
//       };

//       state.push(item);
//     }

//     if (action.type === ITEM_REMOVED) {
//       return state.filter((item) => item.uuid !== action.payload.uuid);
//     }

//     if (action.type === ITEM_PRICE_UPDATED) {
//       const item = selectItem(state, action.payload);
//       item.price = parseInt(action.payload.price, 10);
//     }

//     if (action.type === ITEM_QUANTITY_UPDATED) {
//       const item = selectItem(state, action.payload);
//       item.quantity = parseInt(action.payload.quantity, 10);
//     }
//   }, initialItems);

export default reducer;
