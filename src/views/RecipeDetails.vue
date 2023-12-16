<template>
    <section class="details-container">
        <h2>{{ recipe.title }}</h2>
        <div>
            <br>
            <h4>רכיבים:</h4>
            <ul class="clean-list">
                <li v-for="ingredient in recipe.ingredients">
                    {{ ingredient }}
                </li>
            </ul>
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

import { recipeService } from '../services/recipe.service'

export default {

    data() {
        return {
            recipe: {}
        }
    },
    async created() {
        await this.loadRecipe()
    },
    // async mounted() {
    //     await this.loadRecipe()
    // },
    methods: {
        async loadRecipe() {
            const recipeId = this.$route.params.recipeId
            this.recipe = await recipeService.getById(recipeId)
            console.log("🚀 ~ file: RecipeDetails.vue:47 ~ loadRecipe ~ this.recipe:", this.recipe)
        },
    },
}
</script>