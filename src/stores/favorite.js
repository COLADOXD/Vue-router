import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteStore = defineStore("favorite", () => {
  const favorites = ref([]);

  const addFavorite = (poke) => {
    favorites.value.push(poke);
  };

  const remove = (id) => {
    console.log(favorites.value.filter((item) => item.id !== id));
    favorites.value = favorites.value.filter((item) => item.id !== id);
  };

  return {
    favorites,
    addFavorite,
    remove,
  };
});
