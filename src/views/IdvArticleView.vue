<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getArticleById } from '../api/articles';
import ArticleContent from '@/components/ArticleContent.vue';
import QuizContent from '@/components/QuizContent.vue';

const route = useRoute();
const articleId = ref(null);
const article = ref(null);
const isLoading = ref(false);
const categoryType = ref(null);
watch(
  () => route.params.id,
  async (newId) => {
    isLoading.value = true;
    articleId.value = newId;
    article.value = await getArticleById(articleId.value);
    categoryType.value = getCategoryType();
    isLoading.value = false;
  },
  { immediate: true },
);

const getCategoryType = () => {
  return article.value.categories.find((c) => c.name == 'article' || c.name == 'guide' || c.name == 'quiz').name;
};
</script>

<template>
  <div v-if="isLoading" class="w-100 h-100 d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Chargement...</span>
    </div>
  </div>
  <div v-else class="w-70 ms-5 me-5">
    <div v-if="article" class="w-100 pt-4 pb-4 d-flex flex-column ms-5">
      <div v-if="categoryType == 'article'">
        <ArticleContent :article="article"></ArticleContent>
      </div>
      <div v-if="categoryType == 'guide'">
        <ArticleContent :article="article"></ArticleContent>
      </div>
      <div v-if="categoryType == 'quiz'">
        <QuizContent :article="article"></QuizContent>
      </div>
    </div>
    <div v-else class="w-100 pt-4 pb-4">
      <h2 class="ms-5 mb-5">Article non trouvé</h2>
    </div>
  </div>
</template>
