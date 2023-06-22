import { createRouter, createWebHistory } from 'vue-router';

import HomepageComponent from '../views/Homepage.vue';

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
                component: ()=>import('../views/HousingsShow.vue')
        },

        /* Routes dynamiques pour les pages affichant un seul bien */
        {
                path: '/one-housing/:id',
                name: 'one.housing.show',
                component: ()=>import('../views/OneHousingShow.vue')
        }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
