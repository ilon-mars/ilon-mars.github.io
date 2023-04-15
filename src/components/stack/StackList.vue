<template>
  <ul class="stack__list">
    <li
      v-for="item in stack"
      :key="item"
      class="stack__item"
      :class="{ active: selectedItem === item }"
    >
      <button class="button" @click="select(item)">{{ item }}</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStack } from '@/hooks';
import { stack } from '@/utils/constants';

const { selectStack } = useStack();

const selectedItem = ref('');

const select = (item: string) => {
  selectedItem.value = item;
  selectStack(item);
};
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
    +transition
    border-left: $border-thick solid $light-color
    border-bottom: $border-thick solid $light-color

    &.active
      background-color: $light-color
      color: $dark-color
</style>
