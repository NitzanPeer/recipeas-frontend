<template>
    <section class="preview-list-container">
        <ul v-if="recipes.length" class="recipe-list clean-list">
            <li v-for="(recipe, idx) in this.recipes" :class="`card recipe-${recipe.id}`" key="recipe.id">
                <div class="upper-card-container">
                    <h4>{{ recipe.title }}</h4>
                    <p>{{ recipe.description }}</p>
                </div>

                <div class="bottom-card-container">
                    <img src="../assets/images/lo-mien.jpg" />
                    <!-- <img :src="recipe.imgURL" /> -->
                    <div class="button-row">
                        <RouterLink tag="button" class="btn-config1" :to="'/recipe/details/' + recipe.id">צפה</RouterLink>
                        <RouterLink tag="button" class="btn-config1" :to="'/recipe/edit/' + recipe.id">ערוך</RouterLink>
                        <button class="btn-config1" @click="onRemoveRecipe(recipe.id)">הסר</button>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import RecipePreview from './RecipePreview.vue'
import RecipeDetails from '../views/RecipeDetails.vue'
import { RouterLink } from 'vue-router'
import { eventBus } from '../services/event-bus.service'

export default {
    props: {
        recipes: { type: Array }
    },
    data() {
        return {
            filterBy: {
                txt: ''
            }
        }
    },
    created() {
        eventBus.on('updateFilter', this.updateFilter)
    },
    methods: {
        onRemoveRecipe(id) {
            this.$emit('remove', id)
        },
        onEditRecipe(recipe) {
            this.$emit('edit', recipe)
        },
        onViewRecipe(recipe) {
            this.$emit('view', recipe)
        },
    },
    components: {
        RecipePreview,
        RecipeDetails,
    }
}
</script>