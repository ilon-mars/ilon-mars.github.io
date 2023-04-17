<template>
  <li class="repo-card">
    <a :href="repo.url" target="_blank" rel="noopener noreferrer" class="repo-card__link">
      <div class="repo-card__cover">
        <div class="repo-card__img-wrapper">
          <img class="repo-card__img" :src="repo.coverUrl" :alt="repo.name" />
        </div>

        <ul class="repo-card__tags">
          <li v-for="lang in repo.languages" :key="lang.name" class="caption tag">
            {{ lang.name }}
          </li>
        </ul>
      </div>

      <div class="repo-card__description">
        <h3 class="title repo-card__title">{{ repo.name }}</h3>
        <p class="text">{{ repo.description }}</p>
        <span class="date repo-card__date">Updated at: {{ formatDate(repo.updatedAt) }}</span>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
import type { PinnedRepo } from '@/types';
import { formatDate } from '@/utils/functions';

defineProps<{
  repo: PinnedRepo;
}>();
</script>

<style lang="sass">
.repo-card
  +border($border-thick)
  width: 100%
  min-height: 390px

  +breakpoint('lg')
    min-height: 320px

  &__link
    width: 100%
    height: 100%
    display: flex
    color: inherit

    +breakpoint('lg')
      flex-direction: column

  &__cover
    width: 100%
    height: 100%
    position: relative
    overflow: hidden

  &__img-wrapper
    +retro-filter
    width: 100%
    height: 100%
    min-width: 200px

    +breakpoint('md')
      height: 195px

  &__img
    width: 100%
    height: 100%
    background-color: $fallback-color
    object-fit: cover
    object-position: top left

  &__tags
    +ui-space(gap, 2)
    position: absolute
    display: flex
    justify-content: center
    transform: rotate(-90deg)
    transform-origin: top center
    top: 50%
    right: calc(-50% - $ui-step-inner * 3)

    +breakpoint('xxl')
      right: calc(-50% - $ui-step-inner * 6)

    +breakpoint('xl')
      right: calc(-50% - $ui-step-inner * 15)

    +breakpoint('lg')
      transform: translateY(0)
      top: initial
      bottom: $ui-step-inner * 3
      right: 0
      left: 0

    +breakpoint('xs')
      justify-content: flex-start
      right: initial
      left: -$ui-step-inner * 3

  &__description
    width: 100%
    padding: $ui-step-inner * 3
    display: flex
    flex-direction: column
    justify-content: center

    +breakpoint('lg')
      +ui-space(gap, 3)

  &__title
    +ui-space(bottom, 3)
    margin-top: auto

    +breakpoint('lg')
      margin: 0

  &__date
    margin-top: auto

.tag
  +border($border-thin)
  padding: $ui-step-inner * 2
  background-color: $dark-color
  flex-shrink: 0
  flex-grow: 1

  +breakpoint('lg')
    padding: $ui-step-inner
    text-align: center
</style>
