<script setup>
import { RouterLink } from "vue-router";
import { userGetData } from "@/composables/getData"

const { data, getData, loading, error } = userGetData();

getData("https://pokeapi.co/api/v2/pokemon")
</script>

<template>
    <h1>
        Pokemon
    </h1>

    <div v-if="loading">
        <div class="mt-5 text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <p class="text-center mt-2">Cargando...</p>
    </div>
    <div v-else-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-else>
        <ul class="list-group">
            <li class="list-group-item" v-for="(poke, index) in data.results" :key="index">
                <router-link :to="`/pokemons/${poke.name}`">{{ poke.name }}</router-link>
            </li>
        </ul>
        <div class="my-2">
            <button class="btn btn-outline-danger me-2" @click="getData(data.previous)" :disabled="data.previous === null">
                Previous
            </button>
            <button class="btn btn-outline-primary" @click="getData(data.next)" :disabled="data.next === null">
                Next
            </button>
        </div>
    </div>
</template>