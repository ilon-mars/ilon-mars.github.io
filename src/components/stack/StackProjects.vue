<template>
  <div class="projects">
    <StackProjectsList />
    <StackProjectDescription />
  </div>
</template>

<script setup lang="ts">
import StackProjectsList from '@/components/stack/StackProjectsList.vue';
import StackProjectDescription from '@/components/stack/StackProjectDescription.vue';
</script>

<style lang="sass">
.projects
  +ui-space(top, 6)
  display: flex

  +breakpoint('md')
    flex-direction: column
</style>
