<template>
    <div class="edit-container">
        <h2>{{ this.header }}</h2>
        <form @submit.prevent="submitForm">

            <label>Title</label>
            <div class="group">
                <input type="text" v-model="recipe.title">
            </div>

            <label>Description</label>
            <div class="group">
                <textarea name="" id="" cols="70" rows="4" v-model="recipe.description"></textarea>
            </div>

            <label>Ingredients</label>
            <div class="group">
                <div class="ingredient">
                    <textarea name="" id="" cols="70" rows="15" v-model="recipe.ingredients"></textarea>
                </div>
            </div>

            <label>Method</label>
            <div class="group">
                <textarea name="" id="" cols="70" rows="15" v-model="recipe.method"></textarea>
            </div>

            <div class="button-row">
                <!-- <button type="submit">Submit</button> -->
                <RouterLink tag="button" class="link" :to="'/'">Close</RouterLink>
                <RouterLink type="submit" tag="button" class="link" :to="'/'">Submit</RouterLink>
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
                ingredients: [],
                method: []
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
            this.$emit('submitRecipe', this.recipe)
        },
        onClose() {
            this.$emit('closePopup')
        },
        loadRecipe() {
            const recipeId = this.$route.params.recipeId
            this.recipe = recipeService.getById(parseInt(recipeId))
        }
    },
    computed: {
        header() {
            const header = this.isEditMode ? 'Edit Mode' : 'Add Mode'
            return header
        }
    }
}
</script>