<template>
    <section class="home-container">
        <main>
            <RouterLink class="btn-config1 add-recipe-btn" tag="button" :to="'/recipe/add/'">הוסף מתכון חדש</RouterLink>
            <RecipeList @remove="remove" @edit="edit" :recipes="recipes" />
        </main>
    </section>
</template>

<script>
import RecipeDetails from '../components/RecipeDetails.vue'
import RecipeList from '../components/RecipeList.vue'
import RecipeEdit from '../components/RecipeEdit.vue'
import { recipeService } from '../services/recipe.service.local'
import { eventBus } from '../services/event-bus.service'

export default {
    data() {
        return {
            recipes: [],
            recipeToEdit: {
                title: '',
                description: '',
                ingredients: [],
                method: [],
                imgURL: ''
            }
        }
    },
    created() {
        this.getRecipes()
        eventBus.on('recipeChanged', this.getRecipes)
    },
    methods: {
        remove(id) {
            console.log('remove id', id)
            recipeService.removeRecipe(id)
            this.recipes = recipeService.getRecipes()
        },
        // submit(recipe) {
        //     console.log('recipe', recipe)
        //     if (recipe.id) {
        //         recipeService.updateRecipe(recipe)
        //     } else {
        //         recipeService.addRecipe(recipe)
        //     }
        //     this.recipes = recipeService.getRecipes()
        // },
        edit(recipe) {
            console.log("🚀 ~ file: HomeView.vue:51 ~ edit ~ recipe:", recipe)

            this.recipeToEdit = recipe
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
                imgURL: ''
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
