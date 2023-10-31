<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Poke api
      </router-link>
      <router-link class="btn btn-outline-primary" to="/">Home</router-link>
      <router-link class="btn btn-outline-primary" to="/pokemon">Pokemons</router-link>
    </div>
  </nav>
  <div class="container text-center">
    <RouterView />
  </div>
</template>
