<template>
  <ul class="projects__list">
    <li v-for="project in projects" :key="project.name" class="projects__item">
      <picture class="project" @click="selectProject(project.name)">
        <div class="project__img-wrapper">
          <img class="project__img" :src="project.openGraphImageUrl" :alt="project.description" />
        </div>
        <figcaption class="project__name">{{ project.name }}</figcaption>
      </picture>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useStack } from '@/hooks';
import type { StackRepoRaw } from '@/types';

defineProps<{
  projects: StackRepoRaw[];
}>();

const { selectProject } = useStack();
</script>

<style lang="sass">
.projects
  &__list
    +ui-space(gap, 5)

    display: grid
    grid-template-columns: repeat(4, 1fr)

    +breakpoint('md')
      +ui-space(gap, 3)
      grid-template-columns: repeat(2, 100px)

  &__item
    cursor: pointer

.project
  display: flex
  flex-direction: column

  &__img-wrapper
    +retroFilter
    +border($border-thick)
    +ui-space(bottom, 3)
    width: 130px
    height: 130px
    background-color: $fallback-color

    +breakpoint('md')
      +ui-space(bottom, 2)
      width: 100px
      height: 100px

  &__img
    width: 100%
    height: 100%
    object-fit: cover
    object-position: top left

  &__name
    font-weight: 700
    font-size: rem($ui-step-inner * 4)
    line-height: 130%

    +breakpoint('md')
      font-size: rem($ui-step-inner * 3)
</style>
