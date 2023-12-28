<template>
    <section class="home-container">
        <main>
            <div class="header-container">
                <h3>{{ recipeCounter }}</h3>
                <RouterLink class="btn-config1 add-recipe-btn" tag="button" :to="'/recipe/add/'">הוסף מתכון חדש</RouterLink>
            </div>
            <RecipeList @remove="remove" @edit="edit" :recipes="this.recipes" />
        </main>
    </section>
</template>

<script>
import RecipeList from '../components/RecipeList.vue'
import RecipeDetails from './RecipeDetails.vue'
import RecipeEdit from './RecipeEdit.vue'
import About from './About.vue'
import { eventBus } from '../services/event-bus.service'

import { mapGetters, mapActions } from 'vuex'


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
        await this.fetchRecipes()
    },
    methods: {
        ...mapActions(['fetchRecipes', 'removeRecipe']),

        async remove(id) {
            const conf = confirm('להסיר את המתכון?')
            if (!conf) return
            console.log('remove id', id)
            await this.removeRecipe(id)
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
        async updateFilter(newFilter) {
            console.log("🚀 ~ file: HomeView.vue:71 ~ updateFilter ~ newFilter:", newFilter)
            if(newFilter.txt) await this.updateFilter({ txt: newFilter.txt })
        }
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
