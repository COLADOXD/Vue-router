<script setup>
import { RouterLink } from "vue-router";
import { userGetData } from "@/composables/getData"

const { data, getData, loading } = userGetData();

getData("https://pokeapi.co/api/v2/pokemon")
</script>

<template>
    <div v-if="loading">
        <div class="mt-5 text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <p class="text-center mt-2">Cargando...</p>
    </div>
    <div v-else>
        <h1>
            Pokemon
        </h1>
        <ul>
            <li v-for="(poke, index) in data.results" :key="index">
                <router-link :to="`/pokemons/${poke.name}`">{{ poke.name }}</router-link>
            </li>
        </ul>
    </div>
</template>