import { computed, ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { breakingBadApi } from '@/api';
import type { Character } from '@/characters/types/character';

const characters = ref<Character[]>([]);
const isLoading = ref<boolean>(false);
const isError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const getCharacters = async () => {
  if (characters.value.length > 0) return characters.value;
  const data = await breakingBadApi.getCharacters();
  return data;
};

const loadedCharacters = (data: Character[]) => {
  isError.value = false;
  errorMessage.value = null;
  characters.value = data.filter(
    (character) => ![14, 17, 39].includes(character.char_id)
  );
};

const useCharacters = () => {
  useQuery(['characters'], getCharacters, {
    onSuccess: (data) => loadedCharacters(data),
  });

  return {
    characters,
    isLoading,
    isError,
    errorMessage,
    count: computed(() => characters.value.length),
  };
};

export default useCharacters;
