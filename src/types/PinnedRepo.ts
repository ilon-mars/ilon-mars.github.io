type Language = {
  name: string;
};

export type RepoRaw = {
  id: string;
  name: string;
  description: string;
  updatedAt: string;
  url: string;
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
  coverUrl: string;
  languages: Language[];
}
