<template>
    <nav class="header-navbar">
        <ul class="nav-links clean-list">
            <li>
                <RouterLink to="/">מתכונים</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">עליי</RouterLink>
            </li>
        </ul>
        <div class="search-container" v-if="isRecipesRoute">
            <span class="material-symbols-outlined icon">search</span>
            <input type="text" v-model="searchText" @input="onInput" placeholder="חפשו מתכון">
            <!-- <input type="text" v-model="searchText" @change="onChange" placeholder="חפשו מתכון"> -->
        </div>

        <div class="brand-title">
            ReciPeas
        </div>
    </nav>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    props: {
        isRecipesRoute: { type: Boolean }
    },
    data() {
        return {
            searchText: '',
        }
    },
    methods: {
        ...mapActions(['updateFilter']),

        onInput() {
            if (this.searchText.trim() === '') this.updateFilter({ txt: '' })
            else this.updateFilter({ txt: this.searchText })
        }
    },
    computed: {
    }
}

</script>
