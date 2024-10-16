export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('@/views/IdvArticle.vue'),
  },
];
