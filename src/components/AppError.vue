<template>
  <div class="loading-error">
    <span class="loading-error__error" data-text="error">Error</span>
    <span class="loading-error__message"><slot /></span>
  </div>
</template>

<style lang="sass">
.loading-error
  width: 100%
  height: 100vh
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  &__error
    +ui-space(bottom, 4)
    position: relative
    color: $light-color
    font-size: rem($ui-step-outer * 5)
    letter-spacing: .5em
    text-transform: uppercase
    animation: glitch-main 1s infinite linear alternate-reverse

    &::before
      +glitch-copy
      left: 2px
      text-shadow: -2px 0 #ff00c1
      clip: rect(44px, 450px, 56px, 0)
      animation: glitch-before 5s infinite linear alternate-reverse

    &::after
      +glitch-copy
      left: -2px
      text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1
      animation: glitch-after 1s infinite linear alternate-reverse

  &__message
    color: #ff00c1
</style>
