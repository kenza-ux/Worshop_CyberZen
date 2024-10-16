<script setup>
import { ref, onMounted, watch } from 'vue';
import { getColor } from '../shared/common.js';
defineProps({ categories: Object });

const scrollContainer = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

const checkScrollPosition = () => {
  const container = scrollContainer.value;
  canScrollLeft.value = container.scrollLeft > 0;
  canScrollRight.value = container.scrollLeft + container.clientWidth < container.scrollWidth;
};

const scrollLeft = () => {
  scrollContainer.value.scrollBy({
    left: -200,
    behavior: 'smooth',
  });
};

const scrollRight = () => {
  scrollContainer.value.scrollBy({
    left: 200,
    behavior: 'smooth',
  });
};

onMounted(() => {
  checkScrollPosition();
  scrollContainer.value.addEventListener('scroll', checkScrollPosition);
});
</script>

<template>
  <div class="d-flex flex-row w-100 align-items-center justify-content-start">
    <button
      class="arrow-button"
      :style="{ opacity: canScrollLeft ? 1 : 0.2 }"
      :disabled="!canScrollLeft"
      @click="scrollLeft"
    >
      <img src="/icons/chevron-left.svg" alt="Scroll Left" class="arrow-icon" />
    </button>
    <div ref="scrollContainer" class="scroll-container">
      <div class="d-flex flex-row">
        <div v-for="(item, index) in categories" :key="index">
          <button type="button" class="btn large-category m-4" :class="getColor(item)">
            <h4>{{ item.name }}</h4>
          </button>
        </div>
      </div>
    </div>
    <button
      class="arrow-button"
      :style="{ opacity: canScrollRight ? 1 : 0.2 }"
      :disabled="!canScrollRight"
      @click="scrollRight"
    >
      <img src="/icons/chevron-right.svg" alt="Scroll Right" class="arrow-icon" />
    </button>
  </div>
</template>

<style scoped>
.large-category {
  width: 12em;
  height: 7em;
  text-transform: uppercase;
}

.scroll-container {
  width: 100%;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.arrow-button {
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: none;
}

.arrow-button:disabled {
  cursor: default;
}

.arrow-icon {
  width: 3em;
  height: 3em;
}
</style>
