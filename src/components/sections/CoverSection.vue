<template>
  <section class="cover">
    <div class="container cover__container">
      <div class="cover__avatar">
        <figure class="avatar">
          <div class="avatar__wrapper">
            <img :src="avatarUrl" :alt="name" class="avatar__image" />
          </div>

          <figcaption class="avatar__caption">Me</figcaption>
        </figure>
      </div>

      <div class="cover__description">
        <h1 class="main-title cover__title">{{ name }}</h1>

        <p class="main-text">
          {{ bio }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useState } from '@/hooks';

const { result } = useState();
const { name, bio, avatarUrl } = result.user;
</script>

<style lang="sass">
.cover
  border-top: $border-thick solid $light-color
  border-bottom: $border-thin solid $light-color
  padding: $ui-step-outer * 6 0
  position: relative
  min-height: calc(100vh - $ui-step-outer * 12)
  display: flex
  flex-direction: column
  justify-content: center

  +portrait
    height: auto
    min-height: initial

  +breakpoint('lg')
    padding: $ui-step-outer * 3 $ui-step-outer
    height: initial

  &__container
    display: flex
    align-items: center
    justify-content: center
    width: 100%

    +breakpoint('lg')
      flex-direction: column

  &__avatar
    +ui-space(right, 10)
    width: 34%
    display: flex
    justify-content: center

    +breakpoint('xl')
      width: 65%

    +breakpoint('lg')
      width: 100%
      margin-right: 0
      display: flex
      flex-direction: column
      align-items: center
      margin-bottom: $ui-step-outer * 4

  &__description
    padding: 0 20px 0 40px

    +breakpoint('lg')
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
    right: 60%

    +breakpoint('xl')
      right: 50%

    +breakpoint('lg')
      display: none

.avatar
  width: 356px
  height: 432px
  padding: 20px
  background: #E2E2E2
  transform: rotate(-6.5deg)

  +breakpoint('sm')
    width: 178px
    height: 216px
    padding: 10px

  &__wrapper
    +retro-filter
    display: block
    width: 316px
    height: 316px

    +breakpoint('sm')
      width: 158px
      height: 158px

  &__image
    width: 100%
    height: 100%
    background-color: $fallback-color

  &__caption
    +ui-space(top, 3)
    color: $dark-color
    font-family: 'Nothing You Could Do', cursive
    font-size: rem($ui-step-inner * 5)
    text-align: center
</style>
