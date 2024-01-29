import { createRouter, createWebHistory } from 'vue-router'
import Recipes from '../views/Recipes.vue'
import RecipeDetails from '../components/RecipeDetails.vue'
import RecipeEdit from '../components/RecipeEdit.vue'
import About from '../views/About.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'recipes',
            component: Recipes
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

// scroll to top of screen before each route switch (for mobile):
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
})

export default router
