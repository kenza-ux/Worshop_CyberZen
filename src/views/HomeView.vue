<script setup>
import { ref, computed, onMounted } from 'vue';
import CategoryButton from '../components/CategoryButton.vue';
import Trends from '../components/Trends.vue';
import Multiselect from '@vueform/multiselect';
import { getArticles } from '../api/articles.js';

const loading = ref(false);
const articles = ref([]);
const uniqueCategories = ref([]);
const selectedCategories = ref([]);

onMounted(async () => {
  loading.value = true;
  articles.value = await getArticles();

  const categoryMap = articles.value.reduce((acc, article) => {
    article.categories.forEach((category) => {
      acc[category.name] = category;
    });
    return acc;
  }, {});

  uniqueCategories.value = Object.values(categoryMap);
  loading.value = false;
});

const filteredArticles = computed(() => {
  if (selectedCategories.value.length === 0) {
    return articles.value;
  }
  return articles.value.filter((article) =>
    article.categories.some((category) => selectedCategories.value.includes(category.name)),
  );
});
</script>

<template>
  <main>
    <div v-if="loading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else class="w-70 ms-5 me-5">
      <div class="w-100 pt-4 pb-4">
        <h2 class="ms-5 mb-5"># Les catégories</h2>
        <div class="d-flex justify-content-center">
          <CategoryButton :categories="uniqueCategories"></CategoryButton>
        </div>
      </div>
      <hr />
      <div class="w-100 pt-4 pb-4">
        <div class="d-flex flex-row justify-content-between w-100">
          <h2 class="ms-5 mb-5"># Les tendances</h2>
          <div class="w-25">
            <Multiselect
              v-model="selectedCategories"
              mode="tags"
              placeholder="Choisissez des filtres"
              :close-on-select="false"
              :options="uniqueCategories.map((cat) => cat.name)"
              :searchable="true"
            />
          </div>
        </div>

        <Trends :articles="filteredArticles"></Trends>
      </div>
    </div>
  </main>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>
