<template>
    <span>{{ recipe.title }}</span>
    <p>{{ recipe.description }}</p>
    <!-- <p>{{ recipe.ingredients }}</p> -->
    <!-- <p>{{ recipe.method }}</p> -->
</template>

<script>
export default {

    props: {
        recipe: { type: Object },
        recipeIdx: { type: Number }
    }
}
</script>