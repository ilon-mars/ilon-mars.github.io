<template>
  <div class="project-description">
    <h2 class="title">{{ project.name }}</h2>
    <p class="text">{{ project.description }}</p>
    <span v-if="project.primaryLanguage?.name" class="text"
      >Primary language: {{ project.primaryLanguage.name }}</span
    >
    <span class="text">All languages: {{ languages }}</span>
    <span class="date">Last update: {{ formatDate(project.updatedAt) }}</span>
    <span class="project-description__links">
      <a
        v-if="project.homepageUrl"
        :href="project.homepageUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="project-description__link link-outline"
        >View app</a
      >
      <span v-if="project.homepageUrl">&nbsp;/&nbsp;</span>
      <a
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="project-description__link link-outline"
        >View repo</a
      >
    </span>
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
  width: 40%
  display: flex
  flex-direction: column

  +breakpoint('lg')
    +ui-space(top, 6)
    +ui-space(gap, 3)
    margin-left: 0
    width: 100%

  &__links
    margin-top: auto

  &__link
    +custom-cursor-pointer
    font-size: rem($ui-step-inner * 3)
    line-height: 130%
    color: inherit
    text-transform: uppercase
</style>
