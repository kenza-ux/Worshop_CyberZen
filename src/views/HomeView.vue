<script setup>
import { ref } from 'vue';
import CategoryButton from '../components/CategoryButton.vue';
import Trends from '../components/Trends.vue';
import Multiselect from '@vueform/multiselect';

const articles = ref([
  {
    name: 'Juridique',
    id: 1,
    categories: [{ name: 'juridique' }, { name: 'secu' }, { name: 'anonymat' }, { name: 'guide' }],
  },
  {
    name: 'Secu',
    id: 2,
    categories: [{ name: 'juridique' }, { name: 'secu' }, { name: 'anonymat' }, { name: 'guide' }],
  },
  {
    name: 'Guide',
    id: 3,
    categories: [{ name: 'juridique' }, { name: 'guide' }],
  },
  {
    name: 'Quiz',
    id: 4,
    categories: [{ name: 'juridique' }, { name: 'guide' }],
  },
  {
    name: 'Article',
    id: 5,
    categories: [{ name: 'juridique' }, { name: 'secu' }, { name: 'article' }],
  },
  {
    name: 'Anonymat',
    id: 6,
    categories: [{ name: 'juridique' }, { name: 'guide' }],
  },
  {
    name: 'Enfant',
    id: 7,
    categories: [{ name: 'juridique' }, { name: 'article' }],
  },
  {
    name: 'Ado',
    id: 8,
    categories: [{ name: 'secu' }, { name: 'quiz' }],
  },
  {
    name: 'Adulte',
    id: 9,
    categories: [{ name: 'juridique' }, { name: 'article' }],
  },
]);

const uniqueCategories = ref([]);
uniqueCategories.value = [
  ...new Set(articles.value.flatMap((article) => article.categories.map((category) => category.name))),
];
const value = ref([]);
const filteredArticles = computed(() => {
  if (value.value.length === 0) {
    return articles.value; // No filter applied
  }
  return articles.value.filter((article) => article.categories.some((category) => value.value.includes(category.name)));
});
</script>

<template>
  <main>
    <div class="w-70 ms-5 me-5">
      <div class="w-100 pt-4 pb-4">
        <h2 class="ms-5 mb-5"># Les catégories</h2>
        <div class="d-flex justify-content-center">
          <CategoryButton></CategoryButton>
        </div>
      </div>
      <hr />
      <div class="w-100 pt-4 pb-4">
        <div class="d-flex flex-row justify-content-between w-100">
          <h2 class="ms-5 mb-5"># Les tendances</h2>
          <div class="w-25">
            <Multiselect
              v-model="value"
              mode="tags"
              placeholder="Choisissez des filtres"
              :close-on-select="false"
              :options="uniqueCategories"
              :searchable="true"
            />
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <Trends :articles="filteredArticles"></Trends>
        </div>
      </div>
    </div>
  </main>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
