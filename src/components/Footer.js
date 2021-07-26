import { connect } from "react-redux";

const Footer = ({ counter }) => {
  return (
    <footer>
      <p>Counter: {counter}</p>
    </footer>
  )
};

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps)(Footer);

