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
