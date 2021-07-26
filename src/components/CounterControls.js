import { useDispatch } from "react-redux"

import {
  increaseCounterByOne,
  decreaseCounterByOne,
  resetCounter
} from '../redux/counter/actions';

const CounterControls = () => {
  const dispatch = useDispatch();

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
      <button onClick={handleDecreaseCounter}>-1</button>
      <button onClick={handleResetCounter}>RESET</button>
      <button onClick={handleIncreaseCounter}>+1</button>
    </>
  )
}

export default CounterControls;
