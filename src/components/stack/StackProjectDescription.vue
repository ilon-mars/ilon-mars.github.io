<template>
  <div class="project-description">
    <h2 class="title">Project name</h2>
    <p class="text">Short project description</p>
    <span class="text">Основной язык: </span>
    <span class="text">Все языки: </span>
    <span class="date">Последний апдейт: </span>
    <a href="" target="_blank" rel="noopener noreferrer" class="link project-description__link">Смотреть на гитхабе</a>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass">
.project-description
  +ui-space(left, 5)
  +ui-space(gap, 5)

  display: flex
  flex-direction: column

  +breakpoint('md')
    +ui-space(top, 6)
    +ui-space(gap, 3)
    margin-left: 0

  &__link
    margin-top: auto
</style>
