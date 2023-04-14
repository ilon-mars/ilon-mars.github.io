<template>
  <section class="stack section">
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
</script>

<style lang="sass">
.stack
  &__container
    display: flex
    flex-direction: column
</style>
