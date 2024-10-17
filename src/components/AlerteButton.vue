<template>
  <div class="modal-backdrop" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">X</button>
      <div class="modal-body">
        <h2 class="modal-title">#Alerte / aide d'urgence</h2>
        <hr>
        <p class="intro-text">Bonjour, afin de mieux vous guider, répondez aux questions :</p>

        <!-- Affichage de la question actuelle -->
        <div class="question-container">
          <p>{{ currentQuestion.text }}</p>

          <!-- Affichage des options sous forme de boutons -->
          <div class="options">
            <button
              v-for="(option, index) in currentQuestion.options"
              :key="index"
              class="btn btn-secondary option-btn"
              :class="{ selected: answers[currentQuestionIndex] === option }"
              @click="selectOption(option)"
            >
              {{ option }}
            </button>
          </div>
        </div>

        <!-- Boutons de navigation Back/Next -->
        <div class="navigation-buttons">
          <button
            v-if="currentQuestionIndex > 0"
            @click="previousQuestion"
            class="btn btn-outline-primary"
          >
            Back
          </button>
          <button
            v-if="currentQuestionIndex < questions.length - 1"
            @click="nextQuestion"
            class="btn btn-outline-primary"
          >
            Next
          </button>
        </div>

        <hr />
        <!-- Recommandations d'articles -->
        <div v-if="recommendedArticles.length">
          <h3>Articles recommandés :</h3>
          <ul>
            <li v-for="article in recommendedArticles" :key="article.id">
              <a :href="'/articles/' + article.id">{{ article.name }}</a>
              <span class="tags">
                <span v-for="category in article.categories" :key="category.name" class="tag">
                  {{ category.name }}
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getArticles } from '@/api/articles.js'; // Importation de getArticles

// Gestion de l'émission de l'événement pour fermer le modal
const emit = defineEmits(['close']);
const closeModal = () => {
  emit('close');
};

// Liste des questions et des réponses possibles
const questions = ref([
  {
    text: "Quelle est votre tranche d'âge ?",
    options: ["Moins de 18 ans", "18-35 ans", "Plus de 35 ans"]
  },
  {
    text: "Quelle est votre situation actuelle ?",
    options: ["vol d'identité", "cyber harcèlement ", "autre"]
  },
  {
    text: "Où habitez-vous ?",
    options: ["Région urbaine", "Région rurale", "Autre"]
  }
]);

// Suivi de la question actuelle
const currentQuestionIndex = ref(0);
const currentQuestion = ref(questions.value[currentQuestionIndex.value]);

// Suivi des réponses sélectionnées
const answers = ref([]);

// Articles recommandés
const recommendedArticles = ref([]);

// Fonction pour enregistrer une réponse et passer à la question suivante
const selectOption = (option) => {
  answers.value[currentQuestionIndex.value] = option;
  nextQuestion();
};

// Fonction pour passer à la question suivante
const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
    currentQuestion.value = questions.value[currentQuestionIndex.value];
  } else {
    fetchRecommendedArticles();
  }
};

// Fonction pour revenir à la question précédente
const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
    currentQuestion.value = questions.value[currentQuestionIndex.value];
  }
};

// Récupérer les articles et filtrer selon les réponses
const fetchRecommendedArticles = async () => {
  const articles = await getArticles();
  // Filtrage des articles basés sur les réponses
  recommendedArticles.value = articles.filter(article =>
    article.categories.some(category =>
      answers.value.includes(category.name)
    )
  );
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-title {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.question-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.options {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 15px;
}

.option-btn {
  padding: 10px;
}

.selected {
  background-color: lightgreen; /* Couleur pour indiquer la sélection */
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  margin-bottom: 10px;
}

.tags {
  margin-left: 10px;
}

.tag {
  display: inline-block;
  background-color: #f0f0f0;
  padding: 2px 5px;
  margin-right: 5px;
  border-radius: 4px;
  font-size: 0.8rem;
}
</style>
