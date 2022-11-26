<script setup lang="ts">
import { ref } from 'vue';
const counter = ref<number>(0);
</script>

<template>
  <div class="wrapper">
    <h1>Hola</h1>
    <h2>Mundo</h2>
    <p>Counter</p>
    <button @click="counter++">+1</button>
    {{ counter }}
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
