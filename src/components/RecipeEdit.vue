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
                <label>רכיבים</label>
                <ul>
                    <li v-if="recipe.ingredients.length" v-for="(ingredient, idx) in recipe.ingredients">
                        <input class="ingridient-input" type="text" v-model="recipe.ingredients[idx]">
                        <button class="remove-input btn-config1" @click.stop.prevent="removeIngridient(idx)">X</button>
                    </li>
                </ul>
                <div class="add-container">
                    <button class="add-input btn-config1" @click.stop.prevent="addIngridient">+</button>
                </div>
            </div>

            <div class="group">
                <label>אופן הכנה</label>
                <ol>
                    <li v-if="recipe.method.length" v-for="(step, idx) in recipe.method">
                        <input class="step-input" type="text" v-model="recipe.method[idx]">
                        <button class="remove-input btn-config1" @click.stop.prevent="removeStep(idx)">X</button>
                    </li>
                </ol>
                <div class="add-container">
                    <button class="add-input btn-config1" @click.stop.prevent="addStep">+</button>
                </div>
            </div>

            <div class="button-row">
                <button class="btn-config1" type="submit">שמור</button>
                <RouterLink class="btn-config1" tag="button" :to="'/'">סגור</RouterLink>
            </div>
        </form>
    </div>
</template>

<script>
import { recipeService } from '../services/recipe.service.local'
import { eventBus } from '../services/event-bus.service'

export default {
    props: {
        recipeToEdit: { type: Object }
    },
    data() {
        return {
            recipe: {},
            isEditMode: false,
        }
    },
    created() {
        if (this.$route.params.recipeId) {
            this.isEditMode = true
        }
        this.loadRecipe()
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

            eventBus.emit('recipeChanged', this.recipe.id)
            this.$router.push("/")

        },
        loadRecipe() {
            if(this.isEditMode) {
                const recipeId = this.$route.params.recipeId
                this.recipe = recipeService.getById(recipeId)
            } else {
                this.recipe = {
                    title: '',
                    description: '',
                    ingredients: ['', '', ''],
                    method: ['', '', ''],
                    imgURL: ''
                }
            }
        },
        addIngridient() {
            this.recipe.ingredients.push([''])
        },
        removeIngridient(idx) {
            this.recipe.ingredients.splice(idx, 1)
        },
        addStep() {
            this.recipe.method.push([''])
        },
        removeStep(idx) {
            this.recipe.method.splice(idx, 1)
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