<template>
  <div class="noise" />
</template>

<style lang="sass">
.noise
  height: calc(var(--vh, 1vh) * 100)
  pointer-events: none
  position: fixed
  left: 0
  top: 0
  right: 0
  bottom: 0
  z-index: 100
  opacity: 0.3
  mix-blend-mode: difference

  &::before
    content: ''
    z-index: 101
    position: absolute
    top: -100%
    left: -100%
    width: 300%
    height: 300%
    background: url('@/assets/img/noise.webp') repeat 0 0
    animation: 0.5s noise infinite steps(20)
</style>
