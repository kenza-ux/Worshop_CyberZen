<template>
  <div class="modal-backdrop" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">X</button>
      <div class="modal-body">
        <h2 class="modal-title">#Alerte / aide d'urgence</h2>
        <hr />
        <p class="intro-text">Bonjour, afin de mieux vous guider, répondez aux questions :</p>

        <div class="question-container">
          <p>{{ currentQuestion.text }}</p>

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
        <div v-if="recommendedArticles.length">
          <h3>Articles recommandés :</h3>
          <ul>
            <li v-for="article in recommendedArticles" :key="article.id">
              <!-- Utilisation de router-link pour chaque article -->
              <router-link :to="`/article/${article.id}`" class="article-link">
                {{ article.name }}
              </router-link>
              <span class="tags">
                <TagButton v-for="category in article.categories" :key="category.name" :category="category" />
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
import { getArticles } from '@/api/articles.js';
import TagButton from './TagButton.vue'; // Assurez-vous de modifier le chemin en fonction de votre structure de fichiers.

const emit = defineEmits(['close']);
const closeModal = () => {
  emit('close');
};

// Questions relatives aux dangers des réseaux sociaux
const questions = ref([
  {
    text: "Quelle est votre tranche d'âge ?",
    options: ["Moins de 15 ans", "15-20 ans", "Plus de 20 ans"]
  },
  {
    text: "Avez-vous été victime de cyberharcèlement ?",
    options: ["Oui", "Non"]
  },
  {
    text: "Avez-vous reçu des menaces ou des messages inappropriés ?",
    options: ["Oui", "Non"]
  },
  {
    text: "Pensez-vous que votre compte a été piraté ou usurpé ?",
    options: ["Oui", "Non"]
  },
  {
    text: "Souhaitez-vous signaler un contenu inapproprié sur les réseaux sociaux ?",
    options: ["Oui", "Non"]
  },
  {
    text: "Avez-vous besoin d'informations sur la manière de protéger votre identité en ligne ?",
    options: ["Oui", "Non"]
  },
  {
    text: "Êtes-vous à la recherche de ressources pour parler à un adulte de votre situation ?",
    options: ["Oui", "Non"]
  },
  {
    text: "Avez-vous des préoccupations concernant l'addiction aux réseaux sociaux ?",
    options: ["Oui", "Non"]
  }
]);

const currentQuestionIndex = ref(0);
const currentQuestion = ref(questions.value[currentQuestionIndex.value]);
const answers = ref([]);
const recommendedArticles = ref([]);
const accumulatedKeywords = ref(new Set());

const filterArticles = (articles) => {
  const keywordsArray = Array.from(accumulatedKeywords.value);
  const isChild = answers.value[0] === "Moins de 15 ans";

  recommendedArticles.value = articles.filter(article => {
    // Pour les enfants, ne garder que les articles de la catégorie "enfant"
    if (isChild && !article.categories.some(category => category.name === 'enfant')) {
      return false;
    }

    // Pour les adolescents et adultes, filtrer par mots-clés
    const hasKeywords = keywordsArray.length === 0 ||
      keywordsArray.some(keyword => article.keywords.includes(keyword));

    return hasKeywords;
  });
};

const selectOption = async (option) => {
  answers.value[currentQuestionIndex.value] = option;

  // Ajout des mots-clés en fonction de la réponse
  if (currentQuestionIndex.value === 0) {
    if (option === "Moins de 15 ans") {
      accumulatedKeywords.value.add('jeune');
    } else if (option === "15-20 ans") {
      accumulatedKeywords.value.add('ado');
    } else {
      accumulatedKeywords.value.add('adulte');
    }
  }

  if (option === "Oui") {
    switch (currentQuestionIndex.value) {
      case 1:
        accumulatedKeywords.value.add('cyberharcèlement');
        break;
      case 2:
        accumulatedKeywords.value.add('menaces');
        break;
      case 3:
        accumulatedKeywords.value.add('usurpation');
        break;
      case 4:
        accumulatedKeywords.value.add('signalement');
        break;
      case 5:
        accumulatedKeywords.value.add('protection');
        break;
      case 6:
        accumulatedKeywords.value.add('ressources');
        break;
      case 7:
        accumulatedKeywords.value.add('addiction');
        break;
    }
  }

  // Récupérer et filtrer les articles
  const articles = await getArticles();
  filterArticles(articles);

  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
    currentQuestion.value = questions.value[currentQuestionIndex.value];
  }
};

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
    currentQuestion.value = questions.value[currentQuestionIndex.value];
  }
};

onMounted(async () => {
  const articles = await getArticles();
  recommendedArticles.value = articles;
});
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
  background-color: lightgreen;
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
  display: flex;
  flex-wrap: wrap; /* Pour permettre aux tags de s'ajuster */
  gap: 5px; /* Espacement entre les tags */
}

</style>
