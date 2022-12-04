import type { Character } from '@/characters/types/character';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://breakingbadapi.com/api',
});

export const getCharacters = async (): Promise<Character[]> => {
  const { data } = await instance.get<Character[]>('/characters');
  return data;
};

export const getCharacterById = async (
  characterId: string
): Promise<Character[]> => {
  const { data } = await instance.get<Character[]>(
    `/characters/${characterId}`
  );
  return data;
};
