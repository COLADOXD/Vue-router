<script setup>
import axios from "axios"
import { ref } from "vue";
import { RouterLink } from "vue-router";

const pokemons = ref([])

const getData = async () => {
    try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
        pokemons.value = data.results
    } catch (e) {
        console.log(e)
    }
}
getData()
</script>

<template>
    <h1>
        Pokemon
    </h1>
    <ul>
        <li v-for="(poke, index) in pokemons" :key="index">
            <router-link :to="`/pokemons/${poke.name}`">{{ poke.name }}</router-link>
        </li>
    </ul>
</template>