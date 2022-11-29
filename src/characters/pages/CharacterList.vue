<script setup lang="ts">
import breakingBadApi from '@/api/breakingBadApi';
import { useQuery } from '@tanstack/vue-query';
import CharacterCard from '@/characters/components/CharacterCard.vue';
type Props = {
  title: string;
  visible: boolean;
};
const props = defineProps<Props>();

const {
  data: characters,
  isError,
  isLoading,
  error,
} = useQuery(['characters'], () => breakingBadApi.getCharacters());
</script>
<template>
  <h2>{{ props.title }}</h2>

  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-else-if="isError">{{ error }}</h1>
  <div class="mx-auto">
    <div class="flex flex-wrap justify-center gap-4">
      <CharacterCard
        v-for="character of characters"
        :key="character.char_id"
        :character="character"
      />
    </div>
  </div>
</template>

<style scoped></style>
