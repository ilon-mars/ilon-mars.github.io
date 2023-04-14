<template>
  <footer class="footer">
    <div class="container footer__container">
      <a href="" target="_blank" rel="noopener noreferrer" class="link">Телеграм</a>
      <a href="" target="_blank" rel="noopener noreferrer" class="link">GitHub</a>
      <a href="" target="_blank" rel="noopener noreferrer" class="link">Почта</a>
    </div>
  </footer>
</template>

<style lang="sass">
.footer
  padding: $ui-step-outer * 4 0

  +breakpoint('md')
    padding: $ui-step-outer * 3 $ui-step-outer

  &__container
    display: flex
    justify-content: space-between

    +breakpoint('md')
      +ui-space(gap, 3)
      flex-direction: column
      align-items: center
</style>
