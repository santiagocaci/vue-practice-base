<script setup lang="ts">
import BaseNavbar from '@/shared/components/BaseNavbar.vue';
import { routerLinks } from './router/routeLink';
</script>

<template>
  <div>
    <header>
      <BaseNavbar :links="routerLinks" />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
