<script setup lang="ts">
import { watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useCharacter from '@/characters/composables/useCharacter';

const route = useRoute();
const router = useRouter();

const { id } = route.params as { id: string };

const { character, isError, errorMessage, isLoading } = useCharacter(id);

watchEffect(() => {
  if (!isLoading.value && isError.value) {
    router.replace('/characters');
  }
});
</script>
<template>
  <div class="mx-4 sm:mx-24">
    <h1 v-if="isLoading">Loading...</h1>
    <h1 v-else-if="isError">{{ errorMessage }}</h1>
    <template v-else-if="character">
      <div
        class="flex flex-col md:flex-row items-center md:justify-start gap-2 md:gap-6"
      >
        <img
          class="w-72 md:w-80 h-auto"
          :src="character.img"
          :alt="character.name"
        />
        <div class="flex-grow">
          <h1 class="md:text-center text-3xl">{{ character.name }}</h1>
          <p class="text-2xl">Nickname</p>
          <p>{{ character.nickname }}</p>
          <p class="text-2xl">Birthday</p>
          <p>{{ character.birthday }}</p>
          <p class="text-2xl">Ocupations</p>
          <p v-for="occupation of character.occupation" :key="occupation">
            {{ occupation }}
          </p>
        </div>
      </div>
    </template>
  </div>
</template>
