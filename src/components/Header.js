import { connect } from "react-redux";

const Header = ({ counter }) => {
  return (
    <header>
      <h1>React and Redux</h1>
      <p>Counter: {counter}</p>
    </header>
  )
};

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps)(Header);
