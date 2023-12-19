<template>
    <section class="sidebar">
        <nav class="sidebar-navbar">
            <!-- <ul class="categories clean-list" v-for="(tag, idx) in tags" :key="tag"> -->
            <ul class="tags clean-list" v-for="tag in tags" :key="tag">
                <li>
                    <button class="tag-btn" :class="{ 'active-tag-btn': isTagActive(tag) }" @click="toggleTag(tag)">
                        {{ tag }}
                        <span class="delete-tag-btn" @click="deleteTag(tag)">
                            <!-- <img src="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                                alt=""> -->
                            <svg class="trash-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M18 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14h-2v2h-2v-2H9v-2h2v-2h2v2h2v2zm-6-2V7h2v7h-2z" />
                            </svg>
                        </span>
                    </button>
                </li>
            </ul>
            <br>
            <br>
            <button class="add-tag-btn" @click="addTag">הוסף קטגוריה</button>
        </nav>
    </section>
</template>

<script>

import { eventBus } from '../services/event-bus.service.js'
import { svgService } from '../services/svg.service.js'


export default {
    data() {
        return {
            tags: ['זריזים', 'מרקים', 'אסיאתי', 'איטלקי'],
            activeTags: [],
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
        addTag() {
            const tag = prompt('מה שם הקטגוריה החדשה?')
            if (tag) this.tags.push(tag)
        },
        deleteTag(tag) {
            if (confirm('למחוק את הקטגוריה?')) {
                const idx = this.activeTags.indexOf(tag)
                this.tags.splice(idx, 1)
            }
        }
    },
    computed: {
    },
}
</script>