<template>
  <div class="project-description">
    <h2 class="title">{{ project.name }}</h2>
    <p class="text">{{ project.description }}</p>
    <span v-if="project.primaryLanguage?.name" class="text"
      >Primary language: {{ project.primaryLanguage.name }}</span
    >
    <span class="text">All languages: {{ languages }}</span>
    <span class="date">Last update: {{ formatDate(project.updatedAt) }}</span>
    <a
      :href="project.url"
      target="_blank"
      rel="noopener noreferrer"
      class="link project-description__link"
      >View on GitHub</a
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { formatDate } from '@/utils/functions';
import type { StackRepoRaw } from '@/types';

const props = defineProps<{
  project: StackRepoRaw;
}>();

const languages = computed(() => props.project.languages.nodes.map(node => node.name).join(', '));
</script>

<style lang="sass">
.project-description
  +ui-space(left, 5)
  +ui-space(gap, 5)

  display: flex
  flex-direction: column

  +breakpoint('md')
    +ui-space(top, 6)
    +ui-space(gap, 3)
    margin-left: 0

  &__link
    margin-top: auto
</style>
