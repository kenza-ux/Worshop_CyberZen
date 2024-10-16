<script setup>
import { ref, onMounted, watch } from 'vue';
import TagButton from './TagButton.vue';
defineProps({
  article: Object,
});
</script>

<template>
  <div class="card position-relative">
    <img src="https://picsum.photos/200/300" class="image-size" />
    <div class="position-absolute top-0 start-0 w-100 p-2">
      <div class="row">
        <div v-for="(item, index) in article.categories" :key="index" class="col-auto">
          <TagButton :category="item"></TagButton>
        </div>
      </div>
    </div>

    <div class="card-body">
      <h5 class="card-title text-start">{{ article.name }}</h5>
    </div>
  </div>
</template>

<style>
.image-size {
  width: 100%;
  height: 20em;
}
</style>
