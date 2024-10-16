<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const getColor = (category) => {
  let color = '';
  switch (category.name.toLowerCase()) {
    case 'quiz':
      color = 'purple';
      break;
    case 'juridique':
      color = 'green';
      break;
    case 'secu':
      color = 'red';
      break;
    case 'anonymat':
      color = 'blue';
      break;
    case 'article':
      color = 'turquoise';
      break;
    case 'guide':
      color = 'pale-blue';
      break;
    case 'enfant':
      color = 'pink';
      break;
    case 'ado':
      color = 'yellow';
      break;
    case 'adulte':
      color = 'dark-purple';
      break;
    default:
      break;
  }
  return color + '-button-color';
};
const categories = [
  { name: 'Juridique', id: 1 },
  { name: 'Secu', id: 2 },
  { name: 'Guide', id: 3 },
  { name: 'Quiz', id: 4 },
  { name: 'Article', id: 5 },
  { name: 'Anonymat', id: 6 },
  { name: 'Enfant', id: 7 },
  { name: 'Ado', id: 8 },
  { name: 'Adulte', id: 9 },
];
</script>
<template>
  <div class="d-flex flex-row w-100 align-items-center justify-content-center">
    <div v-for="(item, index) in categories" :key="index">
      <button type="button" class="btn large-category m-2" :class="getColor(item)">{{ item.name }}</button>
    </div>
  </div>
</template>

<style scoped>
.large-category {
  width: 9em;
  height: 7em;
  text-transform: uppercase;
}
</style>
