<template>
    <section class="details-container">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
        <div>
            <br>
            <h4>רכיבים:</h4>
            <ol>
                <li v-for="ingredient in recipe.ingredients">
                    {{ ingredient }}
                </li>
            </ol>
            <br>
            <h4>אופן הכנה:</h4>
            <ol>
                <li v-for="step in recipe.method">
                    {{ step }}
                </li>
            </ol>
            <br>
        </div>
        <div class="button-row">
            <RouterLink class="btn-config1" tag="button" :to="'/'">סגור</RouterLink>
        </div>
    </section>
</template>
<script>

import { recipeService } from '../services/recipe.service.local'

export default {

    data() {
        return {
            recipe: {}
        }
    },
    created() {
        this.loadRecipe()
    },
    methods: {
        loadRecipe() {
            const recipeId = this.$route.params.recipeId
            this.recipe = recipeService.getById(recipeId)
        },
    },
}
</script>