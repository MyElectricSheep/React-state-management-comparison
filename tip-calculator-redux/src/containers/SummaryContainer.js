import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import {
  selectSubTotal,
  selectTipAmount,
  selectTotal
} from '../store/items/selectors';

const mapStateToProps = (state) => {
  //   Deriving data from the state through selectors
  const subtotal = selectSubTotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);
  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);

// Deriving data from the state (without using selectors)
// import { connect } from 'react-redux';
// import { Summary } from '../components/Summary';

// const mapStateToProps = (state) => {
//   const { items, tipPercentage } = state;
//   const subtotal = items.reduce((acc, curr) => {
//     return acc + curr.price * curr.quantity;
//   }, 0);
//   const tipAmount = subtotal * (tipPercentage / 100);
//   const total = subtotal + tipAmount;
//   return {
//     subtotal,
//     tipAmount,
//     total
//   };
// };

// export const SummaryContainer = connect(mapStateToProps)(Summary);
