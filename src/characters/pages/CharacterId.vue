<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
import characterStore from '@/store/characters.store';
import { breakingBadApi } from '@/api';
import type { Character } from '@/characters/types/character';

const route = useRoute();

const { id } = route.params as { id: string };

const getCharacterByIdCacheFirst = async (
  characterId: string
): Promise<Character> => {
  if (characterStore.checkIdInStore(characterId)) {
    return characterStore.ids.list[characterId];
  }

  const data = await breakingBadApi.getCharacterById(characterId);
  return data[0];
};

const { data: character } = useQuery(
  ['characters', id],
  () => getCharacterByIdCacheFirst(id),
  {
    onSuccess(character) {
      characterStore.loadedCharacter(character);
    },
  }
);
</script>
<template>
  <div class="mx-4 sm:mx-24">
    <h1 v-if="!character">Loading...</h1>
    <template v-else>
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
