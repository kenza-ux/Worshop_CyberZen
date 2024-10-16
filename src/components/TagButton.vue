<script setup>
import { ref, onMounted, watch } from 'vue';
import { getColor } from '../shared/common.js';

defineProps({
  category: Object,
});
</script>

<template>
  <span class="badge m-1 badge-size p-3 d-flex align-items-center justify-content-center" :class="getColor(category)">
    {{ category.name }}
  </span>
</template>
<style>
.badge-size {
  width: auto;
  height: 2em;
  text-align: center;
  text-transform: uppercase;
}
</style>
