import type { RouteRecordRaw } from 'vue-router';
import CharacterLayout from '@/characters/layouts/CharacterLayout.vue';
import CharacterId from '@/characters/pages/CharacterId.vue';
import CharacterList from '@/characters/pages/CharacterList.vue';
import CharacterSearch from '@/characters/pages/CharacterSearch.vue';

const ROUTE_NAME = 'characters';

export const characterRoute: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  redirect: `/${ROUTE_NAME}/list`,
  component: CharacterLayout,
  children: [
    {
      path: 'by/:id',
      name: 'character-id',
      component: CharacterId,
      props: { title: 'By Id', visible: false },
    },
    {
      path: `/${ROUTE_NAME}/list`,
      name: 'character-list',
      component: CharacterList,
      props: { title: 'List', visible: true },
    },
    {
      path: `/${ROUTE_NAME}/search`,
      name: 'character-search',
      component: CharacterSearch,
      props: { title: 'Search', visible: true },
    },
  ],
};
