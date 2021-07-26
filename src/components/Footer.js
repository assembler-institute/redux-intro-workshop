import { useSelector } from "react-redux";

const Footer = () => {
  const counter = useSelector(state => state.counter);
  return (
    <footer>
      <p>Counter: {counter}</p>
    </footer>
  )
};

export default Footer;
