<template>
  <section class="repo section">
    <div class="container repo__container">
      <h2 class="section-title repo__title">Pinned repos</h2>

      <ul class="repo__list">
        <RepoCard v-for="repo in repos" :key="repo.id" :repo="repo" />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import RepoCard from '@/components/repo/RepoCard.vue';
import { useState } from '@/hooks';
import { normalizeRepos } from '@/utils/functions';

const { result } = useState();
const { nodes } = result.user.pinnedItems;

const repos = normalizeRepos(nodes);
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
