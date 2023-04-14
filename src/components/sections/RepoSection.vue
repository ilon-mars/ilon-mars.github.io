<template>
  <section class="repo section">
    <div class="container repo__container">
      <h2 class="section-title repo__title">Pinned repos</h2>

      <ul class="repo__list">
        <RepoCard v-for="repo in repos" :key="repo.name" :repo="repo" />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import RepoCard from '@/components/repo/RepoCard.vue';

const repos = [
  {
    name: 'project name',
    description: 'project description',
    languages: ['lang 1', 'lang 2', 'lang 3', 'lang 4', 'lang 5'],
    updated: '22/12/12',
  },
  {
    name: 'project name 2',
    description: 'project description',
    languages: ['lang 1', 'lang 2', 'lang 3', 'lang 4', 'lang 5'],
    updated: '22/12/12',
  },
  {
    name: 'project name 3',
    description: 'project description',
    languages: ['lang 1', 'lang 2', 'lang 3', 'lang 4', 'lang 5'],
    updated: '22/12/12',
  },
  {
    name: 'project name 4',
    description: 'project description',
    languages: ['lang 1', 'lang 2', 'lang 3', 'lang 4', 'lang 5'],
    updated: '22/12/12',
  },
];
</script>

<style lang="sass">
.repo
  &__container
    display: flex
    flex-direction: column

  &__list
    +ui-space(gap, 5)

    display: grid
    grid-template-columns: repeat(2, 1fr)

    +breakpoint('md')
      display: flex
      flex-direction: column
</style>
