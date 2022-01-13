import { useState } from "react";
import { useDispatch } from "react-redux";

import { setCounter } from "../redux/counter/actions";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const dispatch = useDispatch();
  const [counterInput, setCounterInput] = useState('');

  const handleSetCounter = (event) => {
    event.preventDefault();
    dispatch(setCounter(counterInput));
  }

  return (
    <>
      <Header />
      <h1>React App</h1>
      <form onSubmit={handleSetCounter}>
        <label>Set Counter</label>
        <input
          value={counterInput}
          onChange={({ target }) => setCounterInput(target.value)}
        />
        <button>SET</button>
      </form>
      <Footer />
    </>
  );
}

export default App;