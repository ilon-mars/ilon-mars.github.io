import type { Language } from '@/types';

export type StackRepoRaw = {
  description: string;
  homepageUrl: string;
  languages: {
    nodes: Language[];
  };
  name: string;
  primaryLanguage: null | {
    name: string;
  };
  updatedAt: string;
  url: string;
  openGraphImageUrl: string;
};
