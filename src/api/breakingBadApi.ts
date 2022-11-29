import type { Character } from '@/characters/types/character';
import axios from 'axios';

const intance = axios.create({
  baseURL: 'https://breakingbadapi.com/api',
});

const getCharacters = async () => {
  const { data } = await intance.get<Character[]>('/characters');
  return data;
};

const breakingBadApi = { getCharacters };
export default breakingBadApi;
