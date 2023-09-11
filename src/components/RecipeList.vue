<template>
    <section class="preview-list-container">
        <ul v-if="recipes.length" class="recipe-list clean-list">
            <li v-for="(recipe, idx) in recipes" :class="`card recipe-${recipe.id}`" key="recipe.id">
                <div>
                    <h4>{{ recipe.title }}</h4>
                    <p>{{ recipe.description }}</p>
                </div>

                <img src="../assets/images/lo-mien.jpg" />

                <div class="button-row">
                    <button @click="onRemoveRecipe(recipe.id)">Remove</button>
                    <RouterLink tag="button" class="link" :to="'/recipe/edit/' + recipe.id">Edit</RouterLink>
                    <RouterLink tag="button" class="link" :to="'/recipe/details/' + recipe.id">View</RouterLink>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import RecipePreview from './RecipePreview.vue'
import RecipeDetails from './RecipeDetails.vue'
import { RouterLink } from 'vue-router'


export default {
    props: {
        recipes: { type: Array }
    },
    data() {
        return {
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