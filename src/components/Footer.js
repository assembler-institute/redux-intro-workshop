import { useSelector } from "react-redux";

const Footer = () => {
  const counter = useSelector(state => state.counter);

  return (
    <footer style={{backgroundColor: '#CDCDCD'}}>
      {counter.value}
    </footer>
  )
}

export default Footer;
