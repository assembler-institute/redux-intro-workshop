import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
  increaseCounter,
  decreaseCounter,
  resetCounter,
  randomCounter,
  setCounter,
  fetchCounter,
} from '../redux/counter/actions';

const CounterControlsFunctional = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const inputRef = useRef();

  const handleSetCounter = () => {
    const currentValue = inputRef.current.value;
    if (isNaN(currentValue)) return;

    dispatch(setCounter(Number(currentValue)))
    inputRef.current.value = '';
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div>{counter.value}</div>
      <div>
        <input disabled={counter.status === 'loading'} id="inputid" ref={inputRef} />
        <button disabled={counter.status === 'loading'} onClick={handleSetCounter}>Set Counter</button>
      </div>
      <br/>
      <p>{counter.status === 'loading' && 'Cargando random desde API...'}&nbsp;</p>
      <br/>
      <br/>
      <button disabled={counter.status === 'loading'} onClick={() => dispatch(decreaseCounter())}>-</button>
      <button disabled={counter.status === 'loading'} onClick={() => dispatch(increaseCounter())}>+</button>
      <button disabled={counter.status === 'loading'} onClick={() => dispatch(resetCounter())}>reset</button>
      <button disabled={counter.status === 'loading'} onClick={() => dispatch(randomCounter())}>random</button>
      <button disabled={counter.status === 'loading'} onClick={() => dispatch(fetchCounter())}>fetch</button>
      
    </div>
  )
}

export default CounterControlsFunctional;
