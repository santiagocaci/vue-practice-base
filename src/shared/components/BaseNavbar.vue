<script setup lang="ts">
import type { RouterLink } from '@/router/routeLink';

type Props = {
  links: RouterLink[];
  title?: string;
  showIcon?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  title: '',
  showIcon: true,
  links: () => [],
});
</script>

<template>
  <nav class="flex items-center p-4 flex-col sm:flex-row max-w-5xl mx-auto">
    <div class="flex items-center flex-1 gap-2">
      <img
        v-if="props.showIcon"
        src="@/assets/logo.svg"
        alt="Vue Logo"
        height="40"
        width="40"
      />
      <span v-if="props.title">{{ title }}</span>
    </div>
    <div class="flex justify-center sm:justify-start gap-3">
      <RouterLink
        v-for="link of props.links"
        :key="link.title"
        :to="link.path"
        class="link-primary link-hover transition hover:bg-secondary-focus/10 capitalize"
        >{{ link.title }}</RouterLink
      >
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  font-weight: 600;
  opacity: 0.6;
}
.router-link-exact-active {
  text-decoration: underline;
}
</style>
