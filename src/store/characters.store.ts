import { reactive } from 'vue';
import type { Character } from '@/characters/types/character';
import { breakingBadApi } from '@/api';

type Store = {
  characters: {
    list: Character[];
    count: number;
    isLoading: boolean;
    isError: boolean;
    errorMessage: string | null;
  };

  startLoadingCharacters: () => void;
  loadedCharacters: (data: Character[]) => void;
  loadedCharacterFailed: (error: string) => void;
};

const characterStore = reactive<Store>({
  characters: {
    count: 0,
    errorMessage: null,
    isError: false,
    isLoading: true,
    list: [],
  },

  async startLoadingCharacters() {
    const data = await breakingBadApi.getCharacters();
    this.loadedCharacters(data);
  },

  loadedCharacterFailed(error) {
    this.characters = {
      count: 0,
      errorMessage: error,
      isError: true,
      isLoading: false,
      list: [],
    };
  },

  loadedCharacters(data: Character[] | string) {
    if (typeof data === 'string' && data.startsWith('<!doctype')) {
      return this.loadedCharacterFailed('the answer is not a character array');
    }

    const newData: Character[] = structuredClone(data);
    this.characters = {
      ...this.characters,
      count: data.length,
      isLoading: false,
      list: newData,
    };
  },
});

characterStore.startLoadingCharacters();

export default characterStore;
