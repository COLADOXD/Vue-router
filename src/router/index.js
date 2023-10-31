import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/pokemon",
      name: "pokemon",
      component: () => import("../views/PokemonView.vue"),
    },
    {
      path: "/pokemons/:name",
      name: "poke",
      component: () => import("../views/PokeView.vue"),
    },
  ],
});

export default router;
