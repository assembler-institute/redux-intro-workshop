import { connect } from 'react-redux';

const Footer = ({ counter }) => {
  return (
    <footer>Counter: {counter}</footer>
  )
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter 
  };
};

const reduxHoc = connect(mapStateToProps);
export default reduxHoc(Footer);
