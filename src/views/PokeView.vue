<script setup>
import axios from "axios"
import { ref } from 'vue'
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const pokeSprite = ref({});

const back = () => {
    router.push("/pokemon");
};

const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        pokeSprite.value = data.sprites.front_default;
    } catch (error) {
        console.error(error)
        pokeSprite.value = null;
    }
}
getData()

</script>

<template>
    <div v-if="pokeSprite">
        <img :src="pokeSprite" alt="" />
        <h1>Poke: {{ $route.params.name }}</h1>
    </div>
    <h1 v-else>Pokemon no encontrado...</h1>
    <button @click="back()">Volver al listado</button>
</template>