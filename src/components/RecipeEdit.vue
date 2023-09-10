<template>
    <div class="popup">
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
                <button type="submit">Submit</button>
                <button type="button" @click="onClose">Close</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    props: {
        recipeToEdit: { type: Object }
    },
    data() {
        return {
            recipe: {},
        }
    },
    watch: {
        recipeToEdit: {
            handler(newRecipeToEdit) {
                this.recipe = { ...newRecipeToEdit }
            },
            deep: true, // Watch changes within nested objects (ingredients and method)
            immediate: true, // Trigger the handler immediately on component creation
        },
    },
    methods: {
        submitForm() {
            console.log(this.recipe)
            this.$emit('submitRecipe', this.recipe)
        },
        onClose() {
            this.$emit('closePopup')
        },
    }
}
</script>