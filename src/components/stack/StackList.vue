<template>
  <ul class="stack__list">
    <li
      v-for="item in stack"
      :key="item"
      class="stack__item"
      :class="{ active: selectedProject === item }"
    >
      <button class="button" @click="selectStack(item)">{{ item }}</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useStack } from '@/hooks';
import { stack } from '@/utils/constants';

const { selectStack, selectedProject } = useStack();
</script>

<style lang="sass">
.stack
  &__list
    display: grid
    grid-template-columns: repeat(4, 1fr)
    border-top: $border-thick solid $light-color
    border-right: $border-thick solid $light-color

    +breakpoint('md')
      grid-template-columns: repeat(2, 1fr)

    &::before, &::after
      content: ''
      border-left: $border-thick solid $light-color
      border-bottom: $border-thick solid $light-color

  &__item
    +transition
    border-left: $border-thick solid $light-color
    border-bottom: $border-thick solid $light-color

    &.active
      background-color: $light-color
      color: $dark-color
</style>
