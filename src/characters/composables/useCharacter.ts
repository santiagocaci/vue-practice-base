import { computed, ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { breakingBadApi } from '@/api';
import type { Character } from '@/characters/types/character';

const characterSet = ref<{ [id: string]: Character }>({});
const isError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const getCharacter = async (id: string): Promise<Character> => {
  if (characterSet.value[id]) {
    return characterSet.value[id];
  }

  try {
    const data = await breakingBadApi.getCharacterById(id);

    if (data.length > 0) return data[0];

    throw new Error(`Character by id: ${id} not exits`);
  } catch (error: any) {
    throw new Error(error);
  }
};

const loadedCharacter = (character: Character) => {
  isError.value = false;
  errorMessage.value = null;
  characterSet.value[character.char_id] = character;
};

const loeadedError = (error: any) => {
  (isError.value = true), (errorMessage.value = error);
};

const useCharacter = (id: string) => {
  const { isLoading } = useQuery(['characters', id], () => getCharacter(id), {
    onSuccess: (character) => loadedCharacter(character),
    onError: (error) => loeadedError(error),
  });

  return {
    list: characterSet,
    isError,
    errorMessage,
    isLoading,

    // Antes de hacer la peticion el character puede ser null
    character: computed<Character | null>(() => characterSet.value[id]),
  };
};

export default useCharacter;
