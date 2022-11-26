<script setup lang="ts">
import type { RouterLink } from '@/router/routeLink';

const props = defineProps<{ links: RouterLink[] }>();
</script>

<template>
  <nav class="flex items-center p-4 flex-col sm:flex-row max-w-5xl mx-auto">
    <div class="flex items-center flex-1 gap-2">
      <img src="@/assets/logo.svg" alt="Vue Logo" height="40" width="40" />
      <span>BreakingApp</span>
    </div>
    <div class="flex justify-center sm:justify-start gap-3">
      <RouterLink
        v-for="link of props.links"
        :key="link.title"
        :to="link.path"
        class="link-primary link-hover transition hover:bg-secondary-focus/10 capitalize"
        >{{ link.name }}</RouterLink
      >
    </div>
  </nav>
</template>
