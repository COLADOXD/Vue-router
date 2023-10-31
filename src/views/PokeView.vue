<script setup>
import axios from "axios"
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
getData()

</script>

<template>
    <h1>Poke: {{ $route.params.name }}</h1>
</template>