import AddCard from '@/pages/AddCard.vue';
import Index from '@/pages/Index.vue';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory('#app'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
    },
    {
      path: '/add',
      name: 'AddCard',
      component: AddCard,
    },
  ],
});
