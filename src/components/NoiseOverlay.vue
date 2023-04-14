<template>
  <div class="noise" />
</template>

<style lang="sass">
.noise
  height: 100vh
  pointer-events: none
  position: fixed
  left: 0
  top: 0
  right: 0
  bottom: 0
  z-index: 100
  opacity: 0.4
  mix-blend-mode: difference

  &::before
    content: ''
    z-index: 101
    position: absolute
    top: -50%
    left: -50%
    width: 200%
    height: 200%
    background: url('@/assets/img/noise.webp') repeat 0 0
    animation: 0.3s noise infinite
</style>
