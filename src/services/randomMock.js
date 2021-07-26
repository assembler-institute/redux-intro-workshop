const ASYNC_TIMER = 2000;

const getRandom = (maxValue) => new Promise(resolve => {
  const random = Math.round(Math.random() * maxValue);
  setTimeout(() => resolve(random), ASYNC_TIMER);
})

export default getRandom;