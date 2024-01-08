<template>
    <!-- <nav class="sidebar-buttons"> -->
        <button class="add-tag-btn" @click="addTag">הוסף קטגוריה</button>
        <ul class="tag-list clean-list">
            <li class="tag-btn" v-for="tag in tags" :class="`tag-${tag._id}`" :key="tag.title">
                <button class="tag-btn" :class="{ 'active-tag-btn': tag.isActive }" @click="toggleTag(tag)">
                    {{ tag.title }}
                    <span class="delete-tag-btn" @click="deleteTag(tag._id)">
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
    <!-- </nav> -->
</template>

<script>

import { eventBus } from '../services/event-bus.service.js'
import { tagService } from '../services/tag.service.js'
import { svgService } from '../services/svg.service.js'


export default {
    data() {
        return {
            tags: [],
            activeTags: [],
        }
    },
    async created() {
        this.tags = await tagService.getTags()
    },
    methods: {
        toggleTag(tag) {
            // const idx = this.activeTags.findIndex(obj => obj._id === tag._id)
            // if (idx !== -1) {
            //     this.activeTags.splice(idx, 1)
            // } else {
            //     this.activeTags.push(tag)
            // }
            tag.isActive = !tag.isActive
            if (tag.isActive) {
                this.activeTags.push(tag.title)
            }
            eventBus.emit('updateFilter', { tags: this.activeTags })
        },
        async getTags() {
            this.tags = await tagService.getTags()
        },
        async addTag() {
            const tagTitle = prompt('מה שם הקטגוריה החדשה?')
            if (tagTitle) this.tags.push({ title: tagTitle })
        },
        async deleteTag(id) {
            const conf = confirm('להסיר את הקטגוריה?')
            if (!conf) return
            console.log('remove id', id)
            await tagService.removeTag(id)
            this.tags = await tagService.getTags(this.filterBy)
        },
    },
    computed: {
    },
}
</script>