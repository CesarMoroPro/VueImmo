import { createRouter, createWebHistory } from 'vue-router';

import HomepageComponent from '../views/Homepage.vue';
import VillasComponent from '../views/Villas.vue';
import AppartementsComponent from '../views/Appartements.vue';
import ChaletsComponent from '../views/Chalets.vue';

const routes = [
        /* Route pour la page d'accueil */
        {
                path: '/',
                name: 'homepage',
                component: HomepageComponent
        },
        
        /* Routes dynamiques pour les pages de catégories de biens */
        {
                path: '/housings/:id',
                name: 'housings.show',
                component: ()=>import('../views/HousingShow.vue')
        }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
