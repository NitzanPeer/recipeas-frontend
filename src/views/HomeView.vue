<template>
    <main>
        <h1>Recipes</h1>

        <div class="recipes-container">

        </div>

        <div class="add-recipe-container" v-if="popup">
            <div class="popup">
                <form @submit.prevent="">
                    <label>Title</label>
                    <div class="group">
                        <input type="text">
                    </div>

                    <label>Description</label>
                    <div class="group">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <label>Ingredients</label>
                    <div class="group">
                        <div class="ingredient">
                            <input type="text">
                        </div>
                    </div>

                    <label>Method</label>
                    <div class="group">
                        <textarea name="" id="" cols="30" rows="20"></textarea>
                    </div>

                    <button type="submit">Add Recipe</button>
                    <button type="button" @click="togglePopup">Close</button>
                </form>

            </div>
        </div>

        <RecipeList v-if="!popup" @remove="remove" />

        <button v-if="!popup" @click="togglePopup">Add new recipe</button>

    </main>
</template>


<script>
import RecipeList from '../components/RecipeList.vue'
import { recipeService } from '../services/recipe.service'

export default {
    data() {
        return {
            popup: false
        }
    },
    created() {

    },
    methods: {
        togglePopup() {
            this.popup = !this.popup
        },
        remove(id) {
            console.log('remove id', id)
            recipeService.remove(id)
            this.recipes = recipeService.getRecipes()
        }
    },
    components: {
        RecipeList
    }
}

</script>