import { useDispatch } from "react-redux"

import {
  increaseCounterByOne,
  decreaseCounterByOne,
  resetCounter,
  setRandomCounter
} from '../redux/counter/actions';

const MAX_RANDOM_COUNTER = 100;

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

  const handleRandomCounter = () => {
    dispatch(setRandomCounter(MAX_RANDOM_COUNTER))
  }

  return (
    <>
      <button onClick={handleDecreaseCounter}>-1</button>
      <button onClick={handleResetCounter}>RESET</button>
      <button onClick={handleRandomCounter}>RANDOM</button>
      <button onClick={handleIncreaseCounter}>+1</button>
    </>
  )
}

export default CounterControls;
