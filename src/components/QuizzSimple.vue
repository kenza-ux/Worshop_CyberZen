<template>
  <div class="quiz-container">
    <h4 class="quiz-title">Quiz : Protéger sa vie privée sur les réseaux </h4>
    <div v-for="(question, index) in questions" :key="index" class="mb-3">
      <h5 class="question-text">{{ question.text }}</h5>
      <div class="form-check" v-for="(option, i) in question.options" :key="i">
        <input
          class="form-check-input"
          type="radio"
          :name="`question${index}`"
          :value="option"
          v-model="selectedAnswers[index]"
        />
        <label class="form-check-label">{{ option }}</label>
      </div>
      <div v-if="showResults && selectedAnswers[index] !== undefined">
        <p
          class="result-text"
          :class="{ 'correct': isCorrect(index), 'incorrect': !isCorrect(index) }"
        >
          {{ isCorrect(index) ? 'Correct!' : 'Incorrect!' }}
        </p>
      </div>
    </div>
    <button :class="{'clicked': showResults}" class="submit-btn" @click="submitQuiz">Soumettre</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Accepter les questions via les props
const props = defineProps({
  questions: Array,
});

const selectedAnswers = ref(Array(props.questions.length).fill(null));
const showResults = ref(false);

const submitQuiz = () => {
  showResults.value = true;
};

const isCorrect = (index) => {
  return selectedAnswers.value[index] === props.questions[index].correctAnswer;
};
</script>

<style scoped>
.quiz-container {
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  width: 400px; /* Ajustez la largeur selon vos besoins */
}
.quiz-title {
  font-size: 1.3rem; /* Taille réduite */
}
.question-text {
  font-size: 1rem; /* Taille de la question réduite */
}
.result-text {
  font-size: 0.8rem; /* Taille du texte de résultat réduite */
}
.correct {
  color: green;
}
.incorrect {
  color: red;
}
.submit-btn {
  background-color: grey;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.submit-btn.clicked {
  background-color: #0061f2; /* Bleu lorsqu'il est cliqué */
}
</style>
