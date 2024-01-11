<template>
    <section class="recipes-container">
        <main>
            <div class="card-header-container">
                <h3>{{ recipeCounter }}</h3>
                <RouterLink class="btn-config1 add-recipe-btn" tag="button" title="הוספת מתכון" :to="'/recipe/add/'">
                    <font-awesome-icon :icon="['fas', 'plus']" />
                </RouterLink>
            </div>
            <RecipeList @remove="remove" @edit="edit"/>
        </main>
    </section>
</template>

<script>
import RecipeList from '../components/RecipeList.vue'
import RecipeDetails from '../components/RecipeDetails.vue'
import RecipeEdit from '../components/RecipeEdit.vue'
import About from './About.vue'

import { mapGetters, mapActions } from 'vuex'


export default {
    data() {
        return {
            recipeToEdit: {
                title: '',
                description: '',
                ingredients: [],
                method: [],
                imgURL: ''
            },
        }
    },
    async created() {
        await this.fetchRecipes()
    },
    methods: {
        ...mapActions(['fetchRecipes', 'removeRecipe']),

        async remove(id) {
            const confirmed = confirm('להסיר את המתכון?')
            if (confirmed) {
                console.log('remove id', id)
                await this.removeRecipe(id)
            }
        },
        edit(recipe) {
            this.recipeToEdit = recipe
        },
        clearForm() {
            this.recipeToEdit = {
                title: '',
                description: '',
                ingredients: [],
                method: [],
                imgURL: ''
            }
        },
    },
    computed: {
        ...mapGetters(['getRecipes', 'getFilteredRecipes']),

        recipeCounter() {
            return (this.getFilteredRecipes?.length > 0) ? `נמצאו ${this.getFilteredRecipes?.length} מתכונים` : 'לא נמצאו מתכונים'
        }
    },
    components: {
        RecipeList,
        RecipeEdit,
        RecipeDetails,
        About,
    }
}

</script>

<style></style>
