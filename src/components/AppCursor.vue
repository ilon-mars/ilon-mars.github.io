<template>
  <div v-if="!isMobile" class="cursor-wrapper">
    <div class="cursor" :style="{ transform, display }">
      <div class="cursor-text">{{ label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import { useDetectMobile } from '@/hooks';

const { isMobile } = useDetectMobile();

const transform = ref('');
const display = ref('none');
const scale = ref('scale3d(0, 0, 1)');
const label = ref('view');

const moveCursor = (e: MouseEvent) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  transform.value = `translate3d(${mouseX - vw / 2}px, ${mouseY - vh / 2}px, 0) ${scale.value}`;

  if (e.target && e.target instanceof HTMLElement) {
    if (e.target.tagName.toLowerCase() === 'a') {
      display.value = 'flex';
      scale.value = 'scale3d(1, 1, 1)';

      label.value = e.target.dataset.label || 'view';
    } else {
      scale.value = 'scale3d(0, 0, 1)';
    }
  }
};

window.addEventListener('mousemove', moveCursor);

onUnmounted(() => window.removeEventListener('mousemove', moveCursor))
</script>

<style lang="sass">
.cursor-wrapper
  position: fixed
  left: 0
  top: 0
  right: 0
  bottom: 0
  width: 100%
  height: 100vh
  z-index: 102
  display: flex
  justify-content: center
  align-items: center
  pointer-events: none
  transition: opacity .3s

.cursor
  +transition(transform, 0.04s)
  display: none
  overflow: hidden
  padding: $ui-step-inner
  justify-content: center
  align-items: center
  background-color: $dark-color
  font-family: '3270', sans-serif
  font-weight: 500
  color: $light-color
  font-size: rem($ui-step-outer * 2)
  text-align: center
  text-transform: uppercase
  will-change: transform
  transform-style: preserve-3d
  border: $border-thin solid $light-color
</style>
