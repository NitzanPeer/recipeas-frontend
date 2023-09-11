<template>
    <div class="edit-container">
        <h2>{{ this.header }}</h2>
        <form @submit.prevent="submitForm">

            <div class="group">
                <label>שם</label>
                <input type="text" v-model="recipe.title">
            </div>

            <div class="group">
                <label>תיאור</label>
                <textarea name="" id="" cols="70" rows="4" v-model="recipe.description"></textarea>
            </div>

            <div class="group">
                <label>מרכיבים</label>
                <ul>
                    <li v-if="recipe.ingredients.length" v-for="(ingredient, idx) in recipe.ingredients">
                        <input class="ingridient-input" type="text" v-model="recipe.ingredients[idx]">
                    </li>
                </ul>
            </div>

            <div class="group">
                <label>אופן הכנה</label>
                <ol>
                    <li v-if="recipe.method.length" v-for="(step, idx) in recipe.method">
                        <input class="step-input" type="text" v-model="recipe.method[idx]">
                    </li>
                </ol>
            </div>

            <div class="button-row">
                <RouterLink tag="button" class="link" :to="'/'">סגור</RouterLink>
                <button type="submit" @click.stop.prevent="submitForm">שמור</button>
            </div>
        </form>
    </div>
</template>

<script>
import { recipeService } from '../services/recipe.service.local'

export default {
    props: {
        recipeToEdit: { type: Object }
    },
    data() {
        return {
            recipe: {
                title: '',
                description: '',
                ingredients: ['', '', ''],
                method: ['', '', '']
            },
            isEditMode: false,
        }
    },
    created() {
        if (this.$route.params.recipeId) {
            this.isEditMode = true
            this.loadRecipe()
        }
    },
    // watch: {
    //     recipeToEdit: {
    //         handler(newRecipeToEdit) {
    //             this.recipe = { ...newRecipeToEdit }
    //         },
    //         deep: true, // Watch changes within nested objects (ingredients and method)
    //         immediate: true, // Trigger the handler immediately on component creation
    //     },
    // },
    methods: {
        submitForm() {
            console.log(this.recipe)
            if (this.recipe.id) {
                recipeService.updateRecipe(this.recipe)
            } else {
                recipeService.addRecipe(this.recipe)
            }
            this.recipes = recipeService.getRecipes()
            this.$router.push("/")

        },
        loadRecipe() {
            const recipeId = this.$route.params.recipeId
            this.recipe = recipeService.getById(recipeId)
        },
    },
    computed: {
        header() {
            const header = this.isEditMode ? 'עריכה' : 'הוספה'
            return header
        }
    }
}
</script>