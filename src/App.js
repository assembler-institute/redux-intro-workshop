import { useSelector } from "react-redux";

const App = () => {
  const counter = useSelector(state => state.counter);
  return (
    <>
      <h1>React and Redux</h1>
      <h2>Counter: {counter}</h2>
    </>
  )
}

export default App;
