<template>
    <section class="preview-list-container">
        <ul v-if="this.getFilteredRecipes.length" class="recipe-list clean-list">
            <li v-for="(recipe, idx) in this.getFilteredRecipes" :class="`card recipe-${recipe._id}`">

                <h4>{{ recipe.title }}</h4>
                <p>{{ recipe.description }}</p>
                <img src="../assets/images/lo-mien.jpg" />
                <div class="button-row">
                    <RouterLink tag="button" class="btn-config1" title="צפיה במתכון" :to="'/recipe/details/' + recipe._id">
                            <span class="icon-container"><font-awesome-icon :icon="['fas', 'eye']" /></span>
                    </RouterLink>
                    <RouterLink tag="button" class="btn-config1" title="עריכה" :to="'/recipe/edit/' + recipe._id">
                            <span class="icon-container"><font-awesome-icon :icon="['fas', 'pen']" /></span>
                    </RouterLink>
                    <button class="btn-config1" title="הסרה" @click="onRemoveRecipe(recipe._id)">
                            <span class="icon-container"><font-awesome-icon :icon="['fas', 'trash']" /></span>
                    </button>
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
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export default {
    data() {
        return {
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
        // FontAwesomeIcon
    }
}
</script>