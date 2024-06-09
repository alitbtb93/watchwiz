import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ShowDetails from '@/views/ShowDetails.vue';
import SearchResult from '@/views/SearchResult.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/details/:id',
      name: 'Show Details',
      component: ShowDetails,
      props: true
    },
    {
      path: '/search/:query',
      name: 'Search Result',
      component: SearchResult,
      props: true
    }
  ]
});

export default router;
