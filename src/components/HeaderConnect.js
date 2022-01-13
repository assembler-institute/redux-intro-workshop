import { connect } from 'react-redux';

import { increaseCounter, decreaseCounter } from '../redux/counter/actions';

const Header = ({ onIncreaseCounter, onDecreaseCounter }) => {
  return (
    <header>
      <button onClick={onDecreaseCounter}>-</button>
      <button onClick={onIncreaseCounter}>+</button>
    </header>
  )
};

const mapDispatchToProps = (dispatch) => ({
  onIncreaseCounter: () => dispatch(increaseCounter()),
  onDecreaseCounter: () => dispatch(decreaseCounter()),
})

const reduxHoc = connect(null, mapDispatchToProps)

export default reduxHoc(Header);
