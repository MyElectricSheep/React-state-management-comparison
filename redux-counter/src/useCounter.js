import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { set, increment, decrement } from './actions';
import useActions from './useActions';

const useCounter = () => {
  const count = useSelector((state) => state.count);

  // Bind the actions to our dispatch:
  //   const dispatch = useDispatch();
  //   const actions = bindActionCreators({ set, increment, decrement }, dispatch);

  // Or, with a custom useActions fn:
  const actions = useActions({ set, increment, decrement });

  return { count, ...actions };
};

export default useCounter;
