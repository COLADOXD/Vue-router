import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteStore = defineStore("favorite", () => {
  const favorites = ref([]);

  if (localStorage.getItem("favorites")) {
    favorites.value = JSON.parse(localStorage.getItem("favorites"));
  }

  const addFavorite = (poke) => {
    favorites.value.push(poke);
    localStorage.setItem("favorites", JSON.stringify(favorites.value));
  };

  const remove = (id) => {
    favorites.value = favorites.value.filter((item) => item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites.value));
  };

  const findPoke = (poke) => favorites.value.find((item) => item.name === poke);
  return {
    favorites,
    addFavorite,
    remove,
    findPoke,
  };
});
