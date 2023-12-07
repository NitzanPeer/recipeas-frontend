import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeDetails from '../views/RecipeDetails.vue'
import RecipeEdit from '../views/RecipeEdit.vue'
import About from '../views/About.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/recipe/details/:recipeId',
            name: 'recipeDetails',
            component: RecipeDetails
        },
        {
            path: '/recipe/add/',
            name: 'recipeAdd',
            component: RecipeEdit
        },
        {
            path: '/recipe/edit/:recipeId',
            name: 'recipeEdit',
            component: RecipeEdit
        },
        {
            path: '/about',
            name: 'about',
            component: About

            // why do we need the anon func here?
            // component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
