import { createSelector } from 'reselect';

export const selectItems = (state) => state.items;

export const selectItem = (state, uuid) =>
  state.items.find((item) => item.uuid === uuid);

export const selectTipPercentage = (state) => state.tipPercentage;

export const selectItemTotal = createSelector([selectItem], (item) => {
  return item.price * item.quantity;
});

export const selectSubTotal = createSelector([selectItems], (items) =>
  items.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0)
);

export const selectTipAmount = createSelector(
  [selectSubTotal, selectTipPercentage],
  (subTotal, tipPercentage) => subTotal * (tipPercentage / 100)
);

export const selectTotal = createSelector(
  [selectSubTotal, selectTipAmount],
  (subTotal, tipAmount) => subTotal + tipAmount
);
