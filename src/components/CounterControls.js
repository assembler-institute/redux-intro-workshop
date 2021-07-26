import { connect } from "react-redux"

import {
  increaseCounterByOne,
  decreaseCounterByOne,
  resetCounter
} from '../redux/counter/actions';

const CounterControls = ({ increaseCounter, decreaseCounter, resetCounter }) => {
  return (
    <>
      <button onClick={decreaseCounter}>-1</button>
      <button onClick={resetCounter}>RESET</button>
      <button onClick={increaseCounter}>+1</button>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => dispatch(increaseCounterByOne()),
  decreaseCounter: () => dispatch(decreaseCounterByOne()),
  resetCounter: () => dispatch(resetCounter()),
})

export default connect(null, mapDispatchToProps)(CounterControls);

