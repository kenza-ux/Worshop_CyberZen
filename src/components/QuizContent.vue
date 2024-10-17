<script setup>
import { ref, watch, defineProps } from 'vue';
import { getArticleQuizInfo } from '../api/articles';

const props = defineProps({
  article: Object,
});

const quiz = ref(null);
const isLoading = ref(false);
const selectedAnswers = ref([]);
const correctCount = ref(0);
const isSubmitted = ref(false);

watch(
  () => props.article,
  async (newArticle) => {
    isLoading.value = true;
    try {
      quiz.value = await getArticleQuizInfo(newArticle.id);

      selectedAnswers.value = new Array(quiz.value.questions.length).fill([]);
    } catch (error) {
      quiz.value = null;
    } finally {
      isLoading.value = false;
    }
  },
  { immediate: true },
);

const handleSubmit = () => {
  isSubmitted.value = true;
  correctCount.value = 0;

  quiz.value.questions.forEach((question, qIndex) => {
    const userAnswers = selectedAnswers.value[qIndex] || [];
    const correctAnswers = question.answers.filter((a) => a.correct).map((a) => a.name);

    if (JSON.stringify(userAnswers.sort()) === JSON.stringify(correctAnswers.sort())) {
      correctCount.value += 1;
    }
  });
};
</script>

<template>
  <div class="mb-3">
    <h2 class="mb-3"># {{ article.name }}</h2>
    <div class="row">
      <div v-for="(item, index) in article.categories" :key="index" class="col-auto mb-2">
        <TagButton :category="item"></TagButton>
      </div>
    </div>
  </div>

  <div class="mt-5">
    <div v-if="quiz && quiz.questions.length > 0">
      <div v-for="(q, qIndex) in quiz.questions" :key="qIndex">
        <h4>{{ q.question }}</h4>
        <div v-if="q.answers.filter((a) => a.correct).length == 1">
          <div class="form-check">
            <div v-for="(answer, index) in q.answers" :key="index">
              <input
                type="radio"
                class="form-check-input"
                :id="answer.index"
                :name="`question-${qIndex}`"
                :value="answer.name"
                v-model="selectedAnswers[qIndex]"
              />
              <label class="form-check-label" :for="answer.index">{{ answer.name }}</label>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="form-check">
            <div v-for="(answer, index) in q.answers" :key="index">
              <input
                class="form-check-input"
                type="checkbox"
                :id="answer.index"
                :value="answer.name"
                v-model="selectedAnswers[qIndex]"
              />
              <label class="form-check-label" :for="answer.index">{{ answer.name }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="btn btn-primary mt-4" @click="handleSubmit">Soumettre le quiz</button>

    <div v-if="isSubmitted" class="mt-3">
      <p>Vous avez {{ correctCount }} sur {{ quiz.questions.length }} reponse correcte.</p>
    </div>
  </div>
</template>
