export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/:category',
    name: 'category',
    component: () => import('@/views/CategoryContentView.vue'),
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('@/views/IdvArticleView.vue'),
  },
  {
    path: '/guidevideo',
    name: 'guidevideo',
    component: () => import('@/components/GuideVideo.vue'), // Ajoute ta route vers le guide vidéo
  },
];
