<template>
    <section class="preview-list-container">
        <ul v-if="this.getFilteredRecipes.length" class="recipe-list clean-list">
            <li v-for="(recipe, idx) in this.getFilteredRecipes" :class="`card recipe-${recipe._id}`">
                <!-- <div class="upper-card-container"> -->
                    <h4>{{ recipe.title }}</h4>
                    <p>{{ recipe.description }}</p>
                <!-- </div> -->

                <!-- <div class="img-container"> -->
                    <img src="../assets/images/lo-mien.jpg" />
                    <!-- <img :src="recipe.imgURL" /> -->
                <!-- </div> -->

                <div class="button-row">
                    <RouterLink tag="button" class="btn-config1" :to="'/recipe/details/' + recipe._id">צפה</RouterLink>
                    <RouterLink tag="button" class="btn-config1" :to="'/recipe/edit/' + recipe._id">ערוך</RouterLink>
                    <button class="btn-config1" @click="onRemoveRecipe(recipe._id)">הסר</button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import RecipePreview from './RecipePreview.vue'
import RecipeDetails from '../components/RecipeDetails.vue'
import { RouterLink } from 'vue-router'
import { mapGetters, mapActions } from 'vuex'


export default {
    data() {
        return {
            filterBy: {
                txt: '',
                tags: []
            },
            recipes: []
        }
    },
    created() {
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
    computed: {
        ...mapGetters(['getFilteredRecipes']),
    },
    components: {
        RecipePreview,
        RecipeDetails,
    }
}
</script>