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
            <div class="search-container">
                <span class="material-symbols-outlined icon">search</span>
                <input type="text" v-model="searchText" @input="onInput" placeholder="חפשו מתכון">
            </div>

            <div class="brand-title">
                ReciPeas
            </div>
        </nav>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    data() {
        return {
            searchText: '',
        }
    },
    methods: {
        ...mapActions(['updateFilter']),

        onInput() {
            if (this.searchText.trim() === '') this.updateFilter({ txt: ''})
            else this.updateFilter({ txt: this.searchText })
        }
    },
    computed: {
    }
}

</script>
