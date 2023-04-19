import type { Language } from '@/types';

export type PinnedRepoRaw = {
  id: string;
  name: string;
  description: string;
  updatedAt: string;
  url: string;
  homepageUrl: string;
  openGraphImageUrl: string;
  languages: {
    nodes: Language[];
  };
};

export interface PinnedRepo {
  id: string;
  name: string;
  description: string;
  updatedAt: string;
  url: string;
  homepageUrl: string;
  coverUrl: string;
  languages: Language[];
}
