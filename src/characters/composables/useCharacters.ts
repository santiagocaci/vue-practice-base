import breakingBadApi from '@/api/breakingBadApi';
import type { Character } from '@/characters/types/character';
import { ref } from 'vue';

const characters = ref<Character[]>([]);
const isLoading = ref<boolean>(true);

export const useCharacter = () => {
  if (characters.value.length > 0) return;

  breakingBadApi.getCharacters().then((resp) => {
    characters.value = resp;
    isLoading.value = false;
  });

  return { characters, isLoading };
};
