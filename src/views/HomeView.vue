<template>
    <section class="home-container">
        <main>
            <div class="header-container">
                <h3>{{ recipeCounter }}</h3>
                <RouterLink class="btn-config1 add-recipe-btn" tag="button" :to="'/recipe/add/'">הוסף מתכון חדש</RouterLink>
            </div>
            <RecipeList @remove="remove" @edit="edit" :recipes="recipes" />
        </main>
    </section>
</template>

<script>
import RecipeList from '../components/RecipeList.vue'
import RecipeDetails from './RecipeDetails.vue'
import RecipeEdit from './RecipeEdit.vue'
import About from './About.vue'
import { recipeService } from '../services/recipe.service.js'
import { eventBus } from '../services/event-bus.service'

export default {
    data() {
        return {
            recipes: [],
            filterBy: {
                txt: '',
                tags: []
            },
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
        await this.getRecipes()
        eventBus.on('recipeChanged', this.getRecipes)
        eventBus.on('updateFilter', this.updateFilter)
    },
    methods: {
        async getRecipes() {
            this.recipes = await recipeService.getRecipes(this.filterBy)
        },
        async remove(id) {
            const conf = confirm('להסיר את המתכון?')
            if (!conf) return
            console.log('remove id', id)
            await recipeService.removeRecipe(id)
            this.recipes = await recipeService.getRecipes(this.filterBy)
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
            if(newFilter.txt) this.filterBy.txt = newFilter.txt
            if(newFilter.tags) this.filterBy.tags = [...newFilter.tags]
            this.getRecipes()
        }
    },
    computed: {
        recipeCounter() {
            return (this.recipes?.length > 0) ? `נמצאו ${this.recipes?.length} מתכונים` : 'לא נמצאו מתכונים'
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
