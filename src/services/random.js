
const getRandom = () => new Promise((resolve) => {
  const random = Math.round(Math.random() * 100);
  setTimeout(() => { resolve(random) }, 2000);
});

export default getRandom;