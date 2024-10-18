<script setup>
import { ref, computed, onMounted } from 'vue';
import CategoryButton from '../components/CategoryButton.vue';
import AllCategoryContent from '../components/AllCategoryContent.vue';
import Multiselect from '@vueform/multiselect';
import { getArticles } from '../api/articles.js';

const loading = ref(false);
const articles = ref([]);
const uniqueCategories = ref([]);
const selectedCategories = ref([]);
const searchQuery = ref(''); // Ajout d'une référence pour le terme de recherche

onMounted(async () => {
  loading.value = true;
  articles.value = await getArticles();
  if (articles.value.length > 0) {
    const categoryMap = articles.value.reduce((acc, article) => {
      article.categories.forEach((category) => {
        if (category.theme === true) {
          return;
        }
        acc[category.name] = category;
      });
      return acc;
    }, {});

    uniqueCategories.value = Object.values(categoryMap);
    console.log(uniqueCategories.value);
  }
  loading.value = false;
});

// Logique de filtrage des articles par catégories et recherche
const filteredArticles = computed(() => {
  let filtered = articles.value;

  // Filtrage par catégories sélectionnées
  if (selectedCategories.value.length > 0) {
    filtered = filtered.filter((article) =>
      article.categories.some((category) => selectedCategories.value.includes(category.name))
    );
  }

  // Filtrage par recherche (tags, mots-clés, et titre)
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter((article) =>
      article.name.toLowerCase().includes(query) || // Match avec le titre
      article.keywords.some((keyword) => keyword.toLowerCase().includes(query)) || // Match avec les mots-clés
      article.categories.some((category) => category.name.toLowerCase().includes(query)) // Match avec les catégories
    );
  }

  return filtered;
});

// Fonction pour mettre à jour le terme de recherche depuis la Navbar
const updateSearchQuery = (query) => {
  searchQuery.value = query; // Mettre à jour la recherche avec la valeur reçue
};
</script>

<template>
  <main>
    <NavBar @search="searchQuery = $event" /> <!-- Écouter l'événement de recherche -->

    <div v-if="loading" class="w-100 d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Chargement...</span>
      </div>
    </div>

    <div v-else class="w-70 ms-5 me-5">
      <div v-if="articles && articles.length > 0">
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

          <AllCategoryContent :articles="filteredArticles"></AllCategoryContent>
        </div>
      </div>
      <div v-else>Aucun contenu disponible</div>
    </div>
  </main>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
