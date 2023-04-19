<template>
  <ul class="stack__list">
    <li
      v-for="item in stack"
      :key="item"
      class="stack__item"
      :class="{ active: selectedProject === item }"
      :data-text="item"
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
    position: relative

    &.active
      background-color: $light-color
      color: $dark-color

    & > .button
      +transition(transform)
      position: relative

      &::before, &::after
        content: attr(data-text)
        position: absolute
        top: 0
        left: 0
        padding: $ui-step-outer 0
        width: 100%
        clip: rect(0px, 0px, 0px, 0px)
        background-color: $light-color
        color: $dark-color

      &::before
        left: -3px
        top: -2px
        text-shadow: 2px 0 $light-color
        box-shadow: 2px 0 $light-color

      &::after
        left: 2px
        bottom: -2px
        text-shadow: -1px 0 $light-color
        box-shadow: -1px 0 $light-color

      &:focus-visible
        outline: none
        background-color: $light-color
        color: $dark-color
        transform: scale(1.1)

        &::before
          animation: glitch-tab 1.5s infinite linear alternate-reverse

        &::after
          animation: glitch-tab 2s infinite linear alternate
</style>
