<template>
  <ul class="projects__list">
    <li v-for="project in projects" :key="project" class="projects__item">
      <picture class="project">
        <img class="project__img" />
        <figcaption class="project__name">{{ project }}</figcaption>
      </picture>
    </li>
  </ul>
</template>

<script setup lang="ts">
const projects = [
  'project 1',
  'project 2',
  'project 3',
  'project 4',
  'project 5',
  'project 6',
  'project 7',
  'project 8',
];
</script>

<style lang="sass">
.projects
  &__list
    +ui-space(gap, 5)

    display: grid
    grid-template-columns: repeat(4, 1fr)

    +breakpoint('md')
      +ui-space(gap, 3)
      grid-template-columns: repeat(2, 100px)

  &__item
    cursor: pointer

.project
  display: flex
  flex-direction: column

  &__img
    +border($border-thick)
    +ui-space(bottom, 3)

    width: 130px
    height: 130px
    background-color: #737373

    +breakpoint('md')
      +ui-space(bottom, 2)
      width: 100px
      height: 100px

  &__name
    font-weight: 700
    font-size: rem($ui-step-inner * 4)
    line-height: 130%

    +breakpoint('md')
      font-size: rem($ui-step-inner * 3)
</style>
