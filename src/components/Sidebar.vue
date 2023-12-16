<template>
    <section class="sidebar">
        <nav class="sidebar-navbar">
            <ul class="categories clean-list" v-for="tag in tags" :key="tag">
                <li>
                    <button class="tag-btn" :class="{ 'active-tag-btn': isTagActive(tag)}" @click="toggleTag(tag)">
                        {{ tag }}
                    </button>
                </li>
            </ul>
        </nav>
    </section>
</template>

<script>

import { eventBus } from '../services/event-bus.service.js'

export default {
    data() {
        return {
            tags: ['זריזים', 'מרקים', 'אסיאתי', 'איטלקי'],
            activeTags: []
        }
    },
    created() {
    },
    methods: {
        toggleTag(tag) {
            const idx = this.activeTags.indexOf(tag)
            if (idx !== -1) {
                this.activeTags.splice(idx, 1)
            } else {
                this.activeTags.push(tag)
            }
            eventBus.emit('updateFilter', { tags: this.activeTags })
        },
        isTagActive(tag) {
            return this.activeTags.includes(tag)
        },
    },
    computed: {
    },
}
</script>