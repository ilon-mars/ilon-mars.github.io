<template>
  <NoiseOverlay />

  <AppError v-if="error">{{ error.message }}</AppError>

  <AppLoader v-if="loading" />

  <template v-else>
    <main class="main">
      <CoverSection />
      <StackSection />
      <RepoSection />
      <AppFooter />
    </main>
  </template>
  <AppCursor />
</template>

<script setup lang="ts">
import CoverSection from '@/components/sections/CoverSection.vue';
import StackSection from '@/components/sections/StackSection.vue';
import RepoSection from '@/components/sections/RepoSection.vue';
import AppFooter from '@/components/AppFooter.vue';
import NoiseOverlay from '@/components/NoiseOverlay.vue';
import AppLoader from '@/components/AppLoader.vue';
import AppError from '@/components/AppError.vue';
import AppCursor from '@/components/AppCursor.vue';
import { useState } from '@/hooks';

const { loading, error } = useState();
</script>
