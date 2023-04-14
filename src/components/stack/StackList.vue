<template>
  <ul class="stack__list">
    <li v-for="item in stack" :key="item" class="stack__item">
      <button class="button">{{ item }}</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { stack } from '@/utils/constants';
</script>

<style lang="sass">
.stack
  &__list
    display: grid
    grid-template-columns: repeat(5, 1fr)
    border-top: $border-thick solid $light-color
    border-right: $border-thick solid $light-color

    +breakpoint('md')
      grid-template-columns: repeat(2, 1fr)

    &::before, &::after
      content: ''
      border-left: $border-thick solid $light-color
      border-bottom: $border-thick solid $light-color

  &__item
    border-left: $border-thick solid $light-color
    border-bottom: $border-thick solid $light-color
</style>
