import { useDispatch } from 'react-redux';

import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
  setRandomCounter,
} from '../redux/counter/actions';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <button onClick={() => dispatch(decreaseCounter())}>-</button>
      <button onClick={() => dispatch(increaseCounter())}>+</button>
      <button onClick={() => dispatch(resetCounter())}>RESET</button>
      <button onClick={() => dispatch(setRandomCounter())}>RANDOM</button>
    </header>
  )
};

export default Header;
