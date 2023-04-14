<template>
  <footer class="footer">
    <div class="container footer__container">
      <a
        v-for="{ name, link } in links"
        :key="name"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
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
    name: 'Телеграм',
    link: 'https://t.me/ilon_mars',
    tip: 'Написать',
  },
  {
    name: 'GitHub',
    link: url,
    tip: 'Перейти в профиль',
  },
  {
    name: 'Почта',
    link: `mailto:${email}`,
    tip: 'Написать',
  },
];
</script>

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
