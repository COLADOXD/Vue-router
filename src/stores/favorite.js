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

  const findPoke = (poke) => favorites.value.find((item) => item.name === poke);
  return {
    favorites,
    addFavorite,
    remove,
    findPoke,
  };
});
