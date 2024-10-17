<script setup>
import ContentCard from './ContentCard.vue';
defineProps({
  articles: Object,
});
</script>

<template>
  <div class="container text-center">
    <div class="row">
      <div v-for="(item, index) in articles" :key="index" class="col-md-4 mb-4">
        <ContentCard :article="item"></ContentCard>
      </div>
    </div>
  </div>
</template>
