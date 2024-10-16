<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const articleId = ref(null);

    watch(
      () => route.params.id,
      (newId, oldId) => {
        articleId.value = newId;
      },
      { immediate: true },
    );

    return { articleId };
  },
};
</script>

<template>
  <div>
    <h1>Article ID: {{ articleId }}</h1>
    <h1>Article ID: {{ articleId }}</h1>
    <h1>Article ID: {{ articleId }}</h1>
    <h1>Article ID: {{ articleId }}</h1>
    <h1>Article ID: {{ articleId }}</h1>
    <h1>Article ID: {{ articleId }}</h1>
    <h1>Article ID: {{ articleId }}</h1>
    <h1>Article ID: {{ articleId }}</h1>
    <h1>Article ID: {{ articleId }}</h1>
  </div>
</template>
