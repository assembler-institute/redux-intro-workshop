import { useSelector } from "react-redux";

const Header = () => {
  const { status, value } = useSelector(state => state.counter);
  return (
    <header>
      <h1>React and Redux</h1>
      <p>Counter: {status === 'ok' ? value : 'Loading'}</p>
    </header>
  )
};

export default Header;
