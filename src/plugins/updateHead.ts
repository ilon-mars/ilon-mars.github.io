const changeIcons = (hidden: boolean) => {
  const favicon = document.head.querySelector('link[rel="icon"]');
  const appleFavicon = document.head.querySelector('link[rel="apple-touch-icon"]');
  const pngFavicon = document.head.querySelector('link[type="image/png"]');

  appleFavicon!.setAttribute('href', `/apple-touch-icon${hidden ? '-hidden' : ''}.png`);
  favicon!.setAttribute('href', `/favicon${hidden ? '-hidden' : ''}.ico`);
  pngFavicon!.setAttribute('href', `/icon${hidden ? '-hidden' : ''}.png`);
};

const changeTitle = (hidden: boolean) => {
  document.title = hidden ? 'Okay, bye' : 'Github portfolio';
};

const onVisibilityChange = () => {
  const hidden = document.hidden;

  changeIcons(hidden);
  changeTitle(hidden);
};

const addListeners = () => {
  document.addEventListener('visibilitychange', onVisibilityChange);
};

export const updateHead = () => {
  addListeners();
};
