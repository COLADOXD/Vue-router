<script setup>
import { useRoute, useRouter } from "vue-router";
import { userGetData } from "@/composables/getData"
import { useFavoriteStore } from "@/stores/favorite";

const { addFavorite, findPoke } = useFavoriteStore();
const { data, getData, loading, error } = userGetData();

const route = useRoute();
const router = useRouter();

const back = () => {
    router.push("/pokemon");
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>

<template>
    <div class="alert alert-danger mt-2" v-if="error">No existe el pokemon</div>
    <div v-if="loading">
        <div class="mt-5 text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <p class="text-center mt-2">Cargando...</p>
    </div>
    <div v-else>
        <div v-if="data">
            <img :src="data.sprites?.front_default" alt="" />
            <h1>Poke: {{ $route.params.name }}</h1>
            <button :disabled="findPoke(data.name)" @click="addFavorite(data)" class="btn btn-primary mb-2">add
                Favorite</button>
        </div>
        <h1 v-else>Pokemon no encontrado...</h1>
        <button @click="back()">Volver</button>
    </div>
</template>