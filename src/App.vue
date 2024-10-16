<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import AlerteButton from './components/AlerteButton.vue';
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
