<template>
    <section class="preview-list-container">
        <ul v-if="recipes.length" class="recipe-list clean-list">
            <li v-for="(recipe, idx) in recipes" :class="`card recipe-${recipe.id}`" key="recipe.id">
                <div>
                    <!-- <RouterLink :to="'/recipes/' + recipe.id">View Recipe</RouterLink> -->
                    <h4>{{ recipe.title }}</h4>
                    <p>{{ recipe.description }}</p>
                </div>
                <!-- <RecipePreview :recipe="recipe" :recipeIdx="idx" /> -->
                <!-- <RecipeDetails :recipe="recipe" :recipeIdx="idx"/> -->

                <img src="../assets/images/lo-mien.jpg" />

                <div class="button-row">
                    <button @click="onViewRecipe(recipe)">View</button>
                    <button @click="onEditRecipe(recipe)">Edit</button>
                    <button @click="onRemoveRecipe(recipe.id)">Remove</button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import RecipePreview from './RecipePreview.vue'
import RecipeDetails from './RecipeDetails.vue'

export default {
    props: {
        recipes: { type: Array }
    },
    data() {
        return {
            image: `https://picsum.photos/id/200/?random=2}`
        }
    },
    created() {
    },
    methods: {
        onClickRecipe() {

        },
        onRemoveRecipe(id) {
            this.$emit('remove', id)
        },
        onEditRecipe(recipe) {
            this.$emit('edit', recipe)
        },
        onViewRecipe(recipe) {
            this.$emit('view', recipe)
        }
    },
    components: {
        RecipePreview,
        RecipeDetails,
    }
}
</script>