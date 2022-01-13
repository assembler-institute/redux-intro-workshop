import { useSelector } from 'react-redux';

const Footer = () => {
  const { status, number } = useSelector((state) => state.counter);
  return (
    <footer>Counter: {status === 'loading' ? 'Loading...' : number}</footer>
  )
};

export default Footer;
