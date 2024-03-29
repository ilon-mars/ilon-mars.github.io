<template>
  <TransitionGroup class="projects__list" name="list" tag="ul">
    <li
      v-for="project in projects"
      :key="project.name"
      class="projects__item"
      role="button"
      aria-pressed="false"
      tabindex="0"
      @keyup.enter="selectProject(project.name)"
    >
      <figure class="project" @click="selectProject(project.name)">
        <picture class="project__img-wrapper">
          <img class="project__img" :src="project.openGraphImageUrl" :alt="project.description" />
        </picture>
        <figcaption class="project__name">{{ project.name }}</figcaption>
      </figure>
    </li>
  </TransitionGroup>
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

    +breakpoint('sm')
      +ui-space(gap, 3)
      grid-template-columns: repeat(2, 100px)

  &__item
    +transition(color)
    cursor: pointer
    max-width: 140px
    position: relative

    +breakpoint('lg')
      max-width: initial

    &::before
      +transition(width)
      position: absolute
      display: block
      visibility: hidden
      content: ''
      width: 0
      top: -$ui-step-inner * 2
      left: -$ui-step-inner * 2
      height: calc(100% + $ui-step-inner * 4)
      background-color: $light-color
      z-index: -1

    &:focus-visible
      outline: none
      color: $dark-color

      &::before
        width: calc(100% + $ui-step-inner * 4)
        visibility: visible

      .project__img-wrapper
        width: 100%

.project
  display: flex
  flex-direction: column

  &__img-wrapper
    +transition
    +retro-filter
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
    max-width: 130px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

    +breakpoint('md')
      font-size: rem($ui-step-inner * 3)
</style>
