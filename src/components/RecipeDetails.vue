<template>
    <section class="details-container">
        <h2>{{ recipe.title }}</h2>
        <div>
            <br>
            <div class="tag-container">
                <h4>תגיות:</h4>
                <ul class="clean-list">
                    <li v-for="tagId in recipe.tags">
                        {{ getTagTitleById(tagId) }}
                    </li>
                </ul>
            </div>
            <br>
            <div class="ingredient-container">
                <h4>רכיבים:</h4>
                <ul class="">
                    <li v-for="ingredient in recipe.ingredients">
                        {{ ingredient }}
                    </li>
                </ul>
            </div>
            <br>
            <div class="method-container">
                <h4>אופן הכנה:</h4>
                <ol class="">
                    <li v-for="step in recipe.method">
                        {{ step }}
                    </li>
                </ol>
            </div>
            <br>
        </div>
        <div class="button-row">
            <RouterLink class="btn-config1" tag="button" title="חזרה לעמוד הבית" :to="'/'">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
            </RouterLink>
        </div>
    </section>
</template>
<script>

import { recipeService } from '../services/recipe.service'
import { mapActions, mapGetters } from 'vuex'

export default {

    data() {
        return {
            recipe: {},
        }
    },
    async created() {
        await this.loadRecipe()
    },
    methods: {
        async loadRecipe() {
            const recipeId = this.$route.params.recipeId
            this.recipe = await recipeService.getById(recipeId)
        },
    },
    computed: {
        ...mapGetters(['getTagTitleById']),
    }
}
</script>