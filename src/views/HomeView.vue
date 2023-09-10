<template>
    <section class="home-container">
        <header></header>
        <main>
            <div class="temp-header">
                <h1>My Recipe App</h1>
                <button class="add-recipe-btn" v-if="!popup" @click="togglePopup">Add New Recipe</button>
            </div>

            <RecipeList v-if="!popup" @remove="remove" @edit="edit" :recipes="recipes" />
            <RecipeEdit v-if="popup" :recipeToEdit="recipeToEdit" @submitRecipe="submit" @closePopup="togglePopup" />
        </main>
    </section>

</template>

<script>
import RecipeDetails from '../components/RecipeDetails.vue'
import RecipeList from '../components/RecipeList.vue'
import RecipeEdit from '../components/RecipeEdit.vue'
import { recipeService } from '../services/recipe.service.local'

export default {
    data() {
        return {
            popup: false,
            recipes: [],
            recipeToEdit: {
                title: '',
                description: '',
                ingredients: [],
                method: [],
            }
        }
    },
    created() {
        this.getRecipes()
    },
    methods: {
        togglePopup() {
            this.popup = !this.popup
            if (!this.popup) this.clearForm()
        },
        remove(id) {
            console.log('remove id', id)
            recipeService.removeRecipe(id)
            this.recipes = recipeService.getRecipes()
        },
        submit(recipe) {
            console.log('recipe', recipe)
            if (recipe.id) {
                recipeService.updateRecipe(recipe)
            } else {
                recipeService.addRecipe(recipe)
            }
            this.togglePopup()
            this.recipes = recipeService.getRecipes()
        },
        edit(recipe) {
            console.log("🚀 ~ file: HomeView.vue:51 ~ edit ~ recipe:", recipe)

            this.recipeToEdit = recipe
            this.togglePopup()
        },
        getRecipes() {
            this.recipes = recipeService.getRecipes()
        },
        clearForm() {
            this.recipeToEdit = {
                title: '',
                description: '',
                ingredients: [],
                method: [],
            }
        }
    },
    components: {
        RecipeList,
        RecipeEdit,
        RecipeDetails,
    }
}

</script>

<style></style>
