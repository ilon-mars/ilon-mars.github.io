const recalcWindowHeightVariable = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
};

const onResize = () => {
  recalcWindowHeightVariable();
};

const calculateInitialValues = () => {
  onResize();
};

const addListeners = () => {
  window.addEventListener('resize', onResize);
};

let isStarted = false;

export const calcDynamicVH = () => {
  if (isStarted) return;

  calculateInitialValues();
  addListeners();

  isStarted = true;
};
