import { ref, reactive } from 'vue';
import { useState } from '@/hooks';
import type { StackRepoRaw } from '@/types';

const selected = reactive<{
  stack: StackRepoRaw[];
  project: StackRepoRaw | null;
}>({
  stack: [],
  project: null,
});

const selectedItem = ref('');

export const useStack = () => {
  const { result } = useState();
  const { nodes } = result.user.repositories;

  const selectStack = (language: string) => {
    selected.stack = nodes.filter((repo: StackRepoRaw) =>
      repo.languages.nodes.find(node => node.name.toLowerCase() === language.toLowerCase())
    );
    selected.project = null;
    selectedItem.value = language;
  };

  const selectProject = (name: string) => {
    selected.project = selected.stack.find(project => project.name === name)!;
  };

  return { selected, selectStack, selectProject, selectedItem };
};
