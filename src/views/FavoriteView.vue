<script setup>
import { useFavoriteStore } from "@/stores/favorite";
import { storeToRefs } from 'pinia';
import { RouterLink } from "vue-router";

const { favorites } = storeToRefs(useFavoriteStore());
const { remove } = useFavoriteStore();
</script>

<template>
    <h1>Favorite</h1>
    <div v-if="favorites.length === 0">
        No hay favoritos
    </div>
    <ul v-else>
        <li v-for="(favorite) in favorites" :key="favorite.id">
            <div>
                {{ favorite.name }}
            </div>
            <router-link class="btn btn-sm btn-outline-primary me-2" :to="`/pokemons/${favorite.name}`">
                Más info
            </router-link>
            <button @click="remove(favorite.id)" class="btn btn-danger btn-sm">Delete</button>
        </li>
    </ul>
</template>