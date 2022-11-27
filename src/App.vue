<script setup lang="ts">
import BaseNavbar from '@/shared/components/BaseNavbar.vue';
import { routerLinks } from './router/routeLink';
</script>

<template>
  <div>
    <header>
      <BaseNavbar :links="routerLinks" title="BreakingApp" />
    </header>
    <main class="max-w-5xl mx-auto">
      <RouterView />
    </main>
  </div>
</template>
