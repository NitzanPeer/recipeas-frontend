<template>
    <section class="sidebar">
        <nav class="sidebar-navbar">
            <ul class="categories clean-list" v-for="categorie in categories">
                <li>{{ categorie }}</li>
            </ul>
        </nav>
    </section>
</template>

<script>

export default {
    data() {
        return {
            categories: ['תבשילים', 'עוגות', 'ללא גלוטן', 'זריזים']
        }
    }
}
</script>