<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const { increment } = useCounterStore()
// storeToRefs se utiliza con valores reactivos y computados
const { count, double } = storeToRefs(useCounterStore())
</script>

<template>
  <h1>Home counter: {{ count }}</h1>
  <h2>Double {{ double }}</h2>
  <button @click="increment">Increment</button>
</template>
