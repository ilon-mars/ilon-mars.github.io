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

const selectedProject = ref('');

export const useStack = () => {
  const { result } = useState();
  const { nodes } = result.user.repositories;

  const selectStack = (language: string) => {
    selected.stack = nodes.filter((repo: StackRepoRaw) =>
      repo.languages.nodes.find(node => node.name.toLowerCase() === language.toLowerCase())
    );
    selected.project = null;
    selectedProject.value = language;
  };

  const selectProject = (name: string) => {
    selected.project = selected.stack.find(project => project.name === name)!;
  };

  const removeSelection = () => {
    selected.stack = [];
    selected.project = null;
    selectedProject.value = '';
  };

  return { selected, selectStack, selectProject, selectedProject, removeSelection };
};
