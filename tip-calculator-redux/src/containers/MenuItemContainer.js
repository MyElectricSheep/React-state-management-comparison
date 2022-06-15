import { connect } from 'react-redux';
import {
  removeItem,
  updateItemPrice,
  updateItemQuantity
} from '../store/items/actions';
import MenuItem from '../components/MenuItem';

const mapDispatchToProps = (dispatch, ownProps) => {
  //   console.log({ ownProps });
  return {
    // the uuid could come from the component firing the fn... but we have the info in ownProps!
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (newPrice) =>
      dispatch(updateItemPrice(ownProps.uuid, Number(newPrice))),
    updateQuantity: (newQuantity) =>
      dispatch(updateItemQuantity(ownProps.uuid, Number(newQuantity)))
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
