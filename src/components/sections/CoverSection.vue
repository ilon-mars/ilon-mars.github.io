<template>
  <section class="cover">
    <div class="container cover__container">
      <div class="cover__avatar">
        <figure class="avatar">
          <img src="" alt="An image" class="avatar__image" />
          <figcaption class="avatar__caption">Caption goes here</figcaption>
        </figure>
      </div>
      <div class="cover__description">
        <h1 class="main-title cover__title">Марьяна Кондакова</h1>
        <p class="main-text">
          Frontend-разработчик. Пишу на Vue 2/3, Typescript. Моя цель — стать fullstack-разработчиком
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
.cover
  border-top: $border-size-outer solid $light-color
  border-bottom: $border-size-inner solid $light-color
  padding: $ui-step-outer * 6 0
  position: relative
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: center

  +breakpoint('md')
    padding: $ui-step-outer * 3 $ui-step-outer

  &__container
    display: flex
    align-items: center

    +breakpoint('md')
      flex-direction: column

  &__avatar
    +ui-space(right, 10)
    width: 34%

    +breakpoint('md')
      width: 100%
      margin-right: 0
      display: flex
      flex-direction: column
      align-items: center
      margin-bottom: $ui-step-outer * 4

  &__description
    padding: 0 20px 0 40px

    +breakpoint('md')
      padding: 0

  &__title
    +ui-space(bottom, 4)

  &::before
    content: ''
    position: absolute
    width: 2px
    height: 100%
    display: block
    background-color: $light-color
    top: 0
    left: calc(34% + 30px)

    +breakpoint('md')
      display: none

.avatar
  width: 356px
  height: 432px
  padding: 20px
  background: #E2E2E2
  transform: rotate(-6.5deg)

  +breakpoint('md')
    width: 178px
    height: 216px
    padding: 10px

  &__image
    display: block
    width: 316px
    height: 316px
    background: #A7F3D0

    +breakpoint('md')
      width: 158px
      height: 158px
</style>
