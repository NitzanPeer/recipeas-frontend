<template>
    <section class="details-container">
        <span>{{ recipe.title }}</span>
        <p>{{ recipe.description }}</p>
        <div>
            <br>
            <h4>Ingredients:</h4>
            <ol>
                <li v-for="ingredient in recipe.ingredients">
                    {{ ingredient }}
                </li>
            </ol>
            <br>
            <h4>Method:</h4>
            <ol>
                <li v-for="step in recipe.method">
                    {{ step }}
                </li>
            </ol>
            <br>
        </div>
    </section>

</template>
<script>
export default {

    props: {
        recipe: { type: Object },
        recipeIdx: { type: Number }
    },
    methods: {
    }
}
</script>