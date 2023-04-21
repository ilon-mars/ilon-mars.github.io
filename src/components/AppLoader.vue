<template>
  <div class="loader">
    <div class="loader__sunset">
      <div class="loader__mirage" />
    </div>
  </div>
</template>

<style lang="sass">
$sunset-size: 150px

$gradient-1: rgb(232, 189, 59)
$gradient-2: rgb(232, 121, 39)
$gradient-3: rgb(219, 76, 70)
$gradient-4: rgb(175, 55, 54)
$gradient-5: rgb(79, 49, 91)
$gradient-6: rgb(61, 28, 73)

.loader
  width: 100%
  height: calc(var(--vh, 1vh) * 100)
  display: flex
  justify-content: center
  align-items: center
  position: relative
  z-index: 10

  &__sunset
    position: relative
    width: $sunset-size
    height: $sunset-size
    background: linear-gradient(to bottom, $gradient-1, $gradient-2, $gradient-3, $gradient-4, $gradient-5, $gradient-6)
    border-radius: $sunset-size
    z-index: 11

    &::before
      content: ''
      background: $dark-color

  &__mirage
    position: absolute
    bottom: 0
    z-index: 12
    width: 100%
    height: 50%
    border-radius: 0px 0px $sunset-size $sunset-size
    background: repeating-linear-gradient(to bottom, transparent, transparent 5px, $dark-color 10px, $dark-color 15px)
    background-size: 100% 200%
    background-position: 50% 100%
    animation: sunset 5s linear infinite
</style>
