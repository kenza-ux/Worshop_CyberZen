<script setup>
import NavBar from '@/components/NavBar.vue';
import CategoryButton from '../components/CategoryButton.vue';
</script>
<template>
  <header class="header">

  </header>
  <main>
    <div class="w-70 ms-5 me-5">
      <div class="w-100 pt-4 pb-4">
        <h2 class="ms-5 mb-4"># Les catégories</h2>
        <div class="d-flex justify-content-center">
          <CategoryButton></CategoryButton>
        </div>
      </div>
      <hr />
    </div>
  </main>
</template>

