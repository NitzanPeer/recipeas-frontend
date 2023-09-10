<template>
    <div @click="onRecipeClick">
        <h4>{{ recipe.title }}</h4>
        <p>{{ recipe.description }}</p>
    </div>

</template>
<script>
export default {

    props: {
        recipe: { type: Object },
        recipeIdx: { type: Number }
    }
}
</script>