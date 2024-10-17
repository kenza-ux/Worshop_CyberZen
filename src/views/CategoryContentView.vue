<script setup>
import { ref, computed, onMounted } from 'vue';
import AllCategoryContent from '../components/AllCategoryContent.vue';
import Multiselect from '@vueform/multiselect';
import { getArticlesByCategory } from '../api/articles.js';

const loading = ref(false);
const articles = ref([]);
const uniqueCategories = ref([]);
const selectedCategories = ref([]);

const route = useRoute();
const filterCategory = ref(null);

watch(
  () => route.params.category,
  async (category) => {
    loading.value = true;
    filterCategory.value = category;
    articles.value = await getArticlesByCategory(filterCategory.value);
    if (articles.value.length > 0) {
      const categoryMap = articles.value.reduce((acc, article) => {
        article.categories.forEach((category) => {
          acc[category.name] = category;
        });
        return acc;
      }, {});

      uniqueCategories.value = Object.values(categoryMap);
    }

    loading.value = false;
  },
  { immediate: true },
);

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
    <div v-if="loading" class="w-100 d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Chargement...</span>
      </div>
    </div>

    <div v-else class="w-70 ms-5 me-5">
      <div v-if="filteredArticles && filteredArticles.length > 0">
        <div class="w-100 pt-4 pb-4">
          <div class="d-flex flex-row justify-content-between w-100">
            <h2 class="ms-5 mb-5"># {{ filterCategory }}</h2>
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

          <AllCategoryContent :articles="filteredArticles"></AllCategoryContent>
        </div>
      </div>
      <div v-else>Aucun contenue disponible</div>
    </div>
  </main>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>
