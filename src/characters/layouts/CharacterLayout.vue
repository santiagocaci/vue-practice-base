<script setup lang="ts">
import BaseNavbar from '@/shared/components/BaseNavbar.vue';
import { characterRoute } from '@/characters/routes';
import type { RouterLink } from '@/router/routeLink';

const routeLink: RouterLink[] = characterRoute
  .children!.filter((route) => (route.props as { visible: boolean }).visible)
  .map((route) => {
    return {
      name: route.name as string,
      path: route.path,
      title: (route.props as { title: string; visible: boolean }).title,
    };
  });
</script>
<template>
  <h1>Character</h1>
  <BaseNavbar :show-icon="false" :links="routeLink" />
  <RouterView />
</template>

<style scoped></style>
