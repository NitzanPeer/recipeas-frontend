<template>
    <section class="header">
        <nav class="header-navbar">
            <ul class="router-links clean-list">
                <li>
                    <RouterLink to="/">דף הבית</RouterLink>
                </li>
                <!-- <li>
                    <RouterLink to="">קטגוריות</RouterLink>
                </li> -->
                <li>
                    <RouterLink to="/about">עליי</RouterLink>
                </li>
            </ul>
            <div class="search-container">
                <span class="material-symbols-outlined icon">search</span>
                <input type="text" v-model="searchText" @input="onInput" placeholder="חפשו מתכון">
            </div>

            <div class="left-side-container">
                <h1>שמחים שחזרת "משתמש/ת"</h1>
            </div>
        </nav>
    </section>
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
