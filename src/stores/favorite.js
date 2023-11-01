import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteStore = defineStore("favorite", () => {
  const favorites = ref([]);

  const addFavorite = (poke) => {
    favorites.value.push(poke);
  };

  return {
    favorites,
    addFavorite,
  };
});
