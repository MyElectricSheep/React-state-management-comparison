import { connect } from 'react-redux';
import { Summary } from '../components/Summary';

const mapStateToProps = (state) => {
  //   Deriving data from the state
  const { items, tipPercentage } = state;
  const subtotal = items.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  const tipAmount = subtotal * (tipPercentage / 100);
  const total = subtotal + tipAmount;
  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
