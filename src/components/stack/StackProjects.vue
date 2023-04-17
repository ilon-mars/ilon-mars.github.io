<template>
  <div class="projects">
    <StackProjectsList v-if="selected.stack.length" :projects="selected.stack" />
    <p v-else-if="selectedProject" class="text">
      There aren't public projects for this technology for now. But I'm working on it 🧑🏽‍💻
    </p>

    <StackProjectDescription v-if="selected.project" :project="selected.project" />
  </div>
</template>

<script setup lang="ts">
import StackProjectsList from '@/components/stack/StackProjectsList.vue';
import StackProjectDescription from '@/components/stack/StackProjectDescription.vue';
import { useStack } from '@/hooks';

const { selected, selectedProject } = useStack();
</script>

<style lang="sass">
.projects
  +ui-space(top, 6)
  display: flex

  +breakpoint('md')
    flex-direction: column
</style>
