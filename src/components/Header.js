import { useSelector } from "react-redux";

const Header = () => {
  const counter = useSelector(state => state.counter);
  return (
    <header>
      <h1>React and Redux</h1>
      <p>Counter: {counter}</p>
    </header>
  )
};

export default Header;
