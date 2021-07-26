import { useSelector, useDispatch } from "react-redux";

import {
  increaseCounterByOne,
  decreaseCounterByOne,
  resetCounter
} from './redux/counter/actions';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const handleIncreaseCounter = () => {
    dispatch(increaseCounterByOne());
  }

  const handleDecreaseCounter = () => {
    dispatch(decreaseCounterByOne());
  }

  const handleResetCounter = () => {
    dispatch(resetCounter());
  }

  return (
    <>
      <h1>React and Redux</h1>
      <h2>Counter: {counter}</h2>
      <div>
        <button onClick={handleDecreaseCounter}>-1</button>
        <button onClick={handleResetCounter}>RESET</button>
        <button onClick={handleIncreaseCounter}>+1</button>
      </div>
    </>
  )
}

export default App;
