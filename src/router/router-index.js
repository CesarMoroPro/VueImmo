import { createRouter, createWebHistory } from 'vue-router';

import HomepageComponent from '../views/Homepage.vue';
import VillasComponent from '../views/Villas.vue';
import AppartementsComponent from '../views/Appartements.vue';
import ChaletsComponent from '../views/Chalets.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomepageComponent
    },
    {
        path: '/villas',
        name: 'villas',
        component: VillasComponent
    },
    {
        path: '/appartements',
        name: 'appartements',
        component: AppartementsComponent
    },
    {
        path: '/chalets',
        name: 'chalets',
        component: ChaletsComponent
    },
  ]
})

export default router
