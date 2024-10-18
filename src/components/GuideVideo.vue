<script setup>
import { ref } from 'vue';
import TagButton from './TagButton.vue';
import QuizzSimple from './QuizzSimple.vue';

const questions = ref([
  {
    text: 'Pourquoi est-il important de mettre son compte de réseau social en privé ?',
    options: [
      'Pour éviter le harcèlement',
      'Pour augmenter le nombre de followers',
      'Pour partager ses informations avec tout le monde',
      'Pour se faire connaître',
    ],
    correctAnswer: 'Pour éviter le harcèlement',
  },
  {
    text: 'Que doit-on faire pour protéger ses informations personnelles sur les réseaux ?',
    options: [
      'Partager son mot de passe avec ses amis',
      'Utiliser un mot de passe fort',
      'Ne rien changer',
      'Révéler sa localisation',
    ],
    correctAnswer: 'Utiliser un mot de passe fort',
  },
]);

defineProps({
  article: Object,
});
</script>

<template>
  <div class="mb-3">
    <h2 class="mb-3"># {{ article.name }}</h2>
    <!-- Autres éléments du template -->
    <div class="row">
      <div v-for="(item, index) in article.categories" :key="index" class="col-auto mb-2">
        <TagButton :category="item"></TagButton>
      </div>
    </div>

    <div class="d-flex flex-row">

      <div class="d-flex flex-column">
        <h5 class="fw-bold">
          Author : <span class="fw-normal">{{ article.author }}</span>
        </h5>
        <h5 class="fw-bold">
          Source : <span class="fw-normal">{{ article.source }}</span>
        </h5>
        <div v-if="article.keywords && article.keywords.length > 0" class="d-flex flex-column">
          <h5 class="fw-bold">Mots clefs :</h5>
          <div class="d-flex flex-wrap">
          <span
            v-for="(item, index) in article.keywords"
            :key="index"
            class="badge bg-secondary text-uppercase ms-2 d-flex align-items-center text-center"
          >
            {{ item }}
          </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Diviser la page en 2 pour le quiz et la vidéo -->
    <div class="split-container mb-5">
      <div class="quiz-container">
        <!-- Passez les questions comme prop -->
        <QuizzSimple :questions="questions" />
      </div>
      <div class="video-container">
        <iframe
          width="590"
          height="390"
          :src="`https://www.youtube.com/embed/${article.source.split('v=')[1]}`"
          title="YouTube Video"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style>
.split-container {
  display: flex;
  margin: 20px; /* Marge autour de l'ensemble de la zone */
}

.video-container {
  display: flex;
  justify-content: center;
  flex: 1; /* Permet à la vidéo de prendre l'espace restant */
  margin-left: 20px; /* Espacement entre le quiz et la vidéo */
}

.quiz-container {
  flex: 1; /* Permet au quiz de prendre l'espace restant */
  background-color: #f8f9fa; /* Couleur de fond pour le quiz */
  padding: 20px; /* Ajoute un espacement à l'intérieur du quiz */
  border-radius: 5px; /* Arrondit les coins du quiz */
  max-width: 400px; /* Limiter la largeur maximale du quiz pour le centrer */
}
</style>
