<script setup lang="ts">
import { breakingBadApi } from '@/api';
import { useQuery } from '@tanstack/vue-query';
import CharacterCard from '@/characters/components/CharacterCard.vue';
import characterStore from '@/store/characters.store';
type Props = {
  title: string;
  visible: boolean;
};
const props = defineProps<Props>();

const getCharactersIn = async () => {
  if (characterStore.characters.count > 0)
    return characterStore.characters.list;
  const data = await breakingBadApi.getCharacters();
  return data;
};

useQuery(['characters'], getCharactersIn, {
  onSuccess: (data) => characterStore.loadedCharacters(data),
});
</script>
<template>
  <h2>{{ props.title }}</h2>

  <h1 v-if="characterStore.characters.isLoading">Loading...</h1>
  <h1 v-else-if="characterStore.characters.isError">
    {{ characterStore.characters.errorMessage }}
  </h1>
  <div class="mx-auto">
    <div class="flex flex-wrap justify-center gap-4">
      <CharacterCard
        v-for="character of characterStore.characters.list"
        :key="character.char_id"
        :character="character"
      />
    </div>
  </div>
</template>

<style scoped></style>
