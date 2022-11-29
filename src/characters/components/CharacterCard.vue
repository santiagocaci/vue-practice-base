<script setup lang="ts">
import type { Character } from '@/characters/types/character';
import { toRef, toRefs } from 'vue';

type Props = {
  character: Character;
};

const props = defineProps<Props>();

const character = toRef(props, 'character');

const isAlive = () => character.value.status === 'Alive';
const isDead = () => character.value.status === 'Deceased';
</script>

<template>
  <div class="card w-72 bg-base-300 glass">
    <figure>
      <img
        class="object-cover object-top w-full h-80"
        :src="character.img"
        :alt="character.name"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ character.name }}
      </h2>
      <div
        class="badge badge-outline"
        :class="{ 'badge-success': isAlive(), 'badge-error': isDead() }"
      >
        {{ character.status }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
