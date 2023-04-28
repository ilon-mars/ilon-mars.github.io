<template>
  <footer class="footer">
    <div class="container footer__container">
      <a
        v-for="{ name, link, tip } in links"
        :key="name"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="link link-outline footer__link"
        :data-label="tip"
        >{{ name }}</a
      >
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useState } from '@/hooks';
import type { SocialLink } from '@/types';

const { result } = useState();
const { url, email } = result.user;

const links: SocialLink[] = [
  {
    name: 'Telegram',
    link: 'https://t.me/ilon_mars',
    tip: 'Send message',
  },
  {
    name: 'GitHub',
    link: url,
    tip: 'Go to profile',
  },
  {
    name: 'Email',
    link: `mailto:${email}`,
    tip: 'Send email',
  },
];
</script>

<style lang="sass">
.footer
  padding: $ui-step-outer * 4 0
  border-top: $border-thin solid $light-color

  +breakpoint('md')
    padding: $ui-step-outer * 3 $ui-step-outer

  &__container
    display: flex
    justify-content: space-between

    +breakpoint('xs')
      +ui-space(gap, 3)
      flex-direction: column
      align-items: center

  &__link
    +custom-cursor-pointer
</style>
