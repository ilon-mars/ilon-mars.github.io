import type { PinnedRepo, PinnedRepoRaw } from '@/types';

const formatDateNumber = (date: string) => (date.length > 1 ? date : `0${date}`);
const formatYear = (year: number) => year.toString().substring(2);

export const formatDate = (date: string) => {
  const parsedDate = new Date(Date.parse(date));
  const day = formatDateNumber(`${parsedDate.getDate()}`);
  const month = formatDateNumber(`${parsedDate.getMonth() + 1}`);
  const year = formatYear(parsedDate.getFullYear());

  return `${day}/${month}/${year}`;
};

export const normalizeRepos = (reposRaw: PinnedRepoRaw[]): PinnedRepo[] => {
  const normalizedRepos = reposRaw.map(repo => ({
    ...repo,
    coverUrl: repo.openGraphImageUrl,
    languages: repo.languages.nodes,
  }));

  return normalizedRepos;
};

export const updateHead = () => {
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

  document.addEventListener('visibilitychange', () => {
    const hidden = document.hidden;

    changeIcons(hidden);
    changeTitle(hidden);
  });
};
