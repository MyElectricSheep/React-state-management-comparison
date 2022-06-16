import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addNewItem } from '../store/items/actions';
import NewItemForm from '../components/NewItemForm';

// Unnecessary:
// const mapStateToProps = (state) => state;

// 1/ Classic pattern, we get the dispatch fn from mapDispatchToProps and call our action with it:
// const mapDispatchToProps = (dispatch) => {
//   return { onSubmit: (name, price) => dispatch(addNewItem(name, price)) };
// };

// 2/ Or we can bind the actions to dispatch directly using bindActionCreators
// This way we don't need to call dispatch on each of our actions:
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators(
//     {
//       onSubmit: (name, price) => addNewItem(name, price)
//     // onSomething: () => another action
//     },
//     dispatch
//   );
// };

// 3/ If we just give it an object, it will automatically map/bind dispatch to the actions for us
// (If we need to do something a bit more complicated, we can use one of the previous syntaxes)
const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price)
  // onSomething: () => another action
};

export const NewItemFormContainer = connect(
  null, // There's no need to pass a state down to the component here
  mapDispatchToProps
)(NewItemForm);
