<template>
    <section class="home-container">
        <main>
            <RouterLink class="btn-config1 add-recipe-btn" tag="button" :to="'/recipe/add/'">הוסף מתכון חדש</RouterLink>
            <RecipeList @remove="remove" @edit="edit" :recipes="recipes" />
        </main>
    </section>
</template>

<script>
import RecipeList from '../components/RecipeList.vue'
import RecipeDetails from './RecipeDetails.vue'
import RecipeEdit from './RecipeEdit.vue'
import { recipeService } from '../services/recipe.service.local'
import { eventBus } from '../services/event-bus.service'

export default {
    data() {
        return {
            recipes: [],
            filterBy: {
                txt: ''
            },
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
        eventBus.on('updateFilter', this.updateFilter)
    },
    methods: {
        getRecipes() {
            this.recipes = recipeService.getRecipes(this.filterBy)
        },
        remove(id) {
            const conf = confirm('להסיר את המתכון?')
            if(!conf) return
            console.log('remove id', id)
            recipeService.removeRecipe(id)
            this.recipes = recipeService.getRecipes()
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
        updateFilter(newFilter) {
            this.filterBy = newFilter
            this.getRecipes()
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
