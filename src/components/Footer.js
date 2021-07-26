import { useSelector } from "react-redux";

const Footer = () => {
  const { status, value } = useSelector(state => state.counter);
  return (
    <footer>
      <p>Counter: {status === 'ok' ? value : 'Loading'}</p>
    </footer>
  )
};

export default Footer;
