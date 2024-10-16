<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <div class="content">
    <RouterView />
  </div>
</template>
<style>
.content {
  margin-top: 5em;
}
</style>
