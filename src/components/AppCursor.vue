<template>
  <div ref="cursor" class="cursor-wrapper">
    <div class="cursor" :style="{ transform: transform, display: display }">
      <div class="cursor-text view">View</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const cursor = ref();
const transform = ref('');
const display = ref('none');

const moveCursor = e => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  transform.value = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  display.value = 'flex';
};

window.addEventListener('mousemove', moveCursor);
</script>

<style>
body {
  cursor: none;
}
.cursor-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100vh;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  pointer-events: none;
}

.cursor {
  display: none;
  overflow: hidden;
  margin-top: -1rem;
  margin-left: -1rem;
  padding: 0.5rem 0.75rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: #191919;
  font-family: 'Roboto Mono', sans-serif;
  color: #fff;
  font-size: 15px;
  line-height: 120%;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  will-change: transform;
  transform-style: preserve-3d;
}

.cursor-text {
  display: block;
}
</style>
