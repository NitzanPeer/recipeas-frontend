<template>
    <section class="recipe-list-container">
        <ol v-if="recipes.length" class="recipe-list">
            <li v-for="(recipe, idx) in recipes" :class="`recipe-${recipe.id}`">
                <RecipePreview :recipe="recipe" :recipeIdx="idx"/>
                <!-- <RouterLink :to="'/recipes/' + recipe.id">{{ recipe.title }}</RouterLink> -->
                <button @click="onRemoveRecipe(recipe.id)">Remove Recipe</button>
            </li>
        </ol>

    </section>
</template>

<script>
import RecipePreview from './RecipePreview.vue'
import { recipeService } from '../services/recipe.service'

export default {
    props: {
        // recipes: { type: array }
    },
    data() {
        return {
            recipes: []
        }
    },
    async created() {
        this.recipes = await recipeService.getRecipes()
    },
    methods: {
        onClickRecipe() {

        },
        onRemoveRecipe(id) {
            this.$emit('remove', id)
        },
    },
    components: {
        RecipePreview
    }
}
</script>