<script setup>
import { useFavoriteStore } from "@/stores/favorite";
import { storeToRefs } from 'pinia';

const { favorites } = storeToRefs(useFavoriteStore());
</script>

<template>
    <h1>Favorite</h1>
    <div v-if="favorites !== 0">
        No hay favoritos
    </div>
    <ul v-else>
        <li v-for="(favorite) in favorites" :key="favorite.id">{{ favorite.name }}</li>
    </ul>
</template>