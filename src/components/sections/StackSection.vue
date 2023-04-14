<template>
  <section class="stack section">
    <div class="container stack__container">
      <h2 class="section-title stack__title">Stack</h2>

      <StackList />
      <StackProjects />
    </div>
  </section>
</template>

<script setup lang="ts">
import StackList from '@/components/stack/StackList.vue';
import StackProjects from '@/components/stack/StackProjects.vue';
</script>

<style lang="sass">
.stack
  &__container
    display: flex
    flex-direction: column

  &__title
    +ui-space(bottom, 8)
    display: flex
    align-items: center

    +breakpoint('md')
      +ui-space(bottom, 6)

    &::before
      +ui-space(right, 4)
      content: '\005B'

    &::after
      +ui-space(left, 4)
      content: '\005D'
</style>
