<template>
  <section class="stack section" @click="clickOutside" @touchend="clickOutside">
    <div class="container stack__container">
      <h2 class="section-title">Stack</h2>

      <StackList />
      <StackProjects />
    </div>
  </section>
</template>

<script setup lang="ts">
import StackList from '@/components/stack/StackList.vue';
import StackProjects from '@/components/stack/StackProjects.vue';
import { useStack } from '@/hooks';

const { removeSelection } = useStack();

const clickOutside = (e: MouseEvent | TouchEvent) => {
  if (e.target && e.target instanceof HTMLElement) {
    if (!(e.target.closest('.stack__list') || e.target.closest('.projects'))) removeSelection();
  }
};
</script>

<style lang="sass">
.stack
  &__container
    display: flex
    flex-direction: column
</style>
