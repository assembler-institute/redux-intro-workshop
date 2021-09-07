import React from "react";
import { connect } from 'react-redux';

import { increaseCounter, decreaseCounter } from '../redux/counter/actions';

// TODO: refactor to state as object with value and status
class CounterControlsClass extends React.Component {
  render() {
    const { counter, increase, decrease } = this.props;
    return (
      <div style={{ textAlign: 'center' }}>
        <button onClick={decrease}>-</button>
        <span>{counter}</span>
        <button onClick={increase}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increaseCounter()),
  decrease: () => dispatch(decreaseCounter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterControlsClass);
