// stores/searchStore.js
import { defineStore } from 'pinia';

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    query: '', // The current search query entered by the user
  }),
  actions: {
    setQuery(newQuery: string) {
      this.query = newQuery.trim();
    },
  },
});
