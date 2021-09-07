import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
  SET_COUNTER,
  RANDOM_COUNTER,
  LOADING_COUNTER,
} from './types';

export const increaseCounter = () => ({ type: INCREASE_COUNTER });
export const decreaseCounter = () => ({ type: DECREASE_COUNTER });
export const resetCounter = () => ({ type: RESET_COUNTER });
export const setCounter = (value) => ({ type: SET_COUNTER, payload: value });
export const randomCounter = () => ({ type: RANDOM_COUNTER });
export const loadingCounter = () => ({ type: LOADING_COUNTER });

export const fetchCounter = () => {
  return async (dispatch) => {
    dispatch(loadingCounter());
    try {
      const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=10000&col=1&base=10&format=plain&rnd=new')
      const randomNumberAsText = await response.text();
      setTimeout(() => {
        dispatch({ type: SET_COUNTER, payload: Number(randomNumberAsText.trim()) })
      }, 5000);
    } catch (error) {
      dispatch(resetCounter());
    }
  }
}