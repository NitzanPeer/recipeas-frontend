<template>
    <button class="add-tag-btn" @click="addNewTag">הוסף קטגוריה</button>
    <ul class="tag-list clean-list">
        <li class="tag-btn" v-for="tag in tags" :class="`tag-${tag._id}`" :key="tag.title">
            <button class="tag-btn" :class="{ 'active-tag-btn': tag.isActive }" @click="toggleActiveTag(tag._id)">
                {{ tag.title }}
            </button>
            <!-- works but console error: -->
            <span class="delete-tag-btn fa-regular fa-trash-can" @click="deleteTag(tag._id)"></span>
            <!-- new syntax that doesn't work: -->
            <!-- <font-awesome-icon class="delete-tag-btn" :icon="['far', 'trash-can']" /> -->

        </li>
    </ul>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            tags: [],
            activeTags: []
        }
    },
    async created() {
        await this.fetchTags()
        await this.getAllTags()
    },
    methods: {
        ...mapActions(['fetchTags', 'addTag', 'removeTag', 'toggleTag', 'updateFilter']),
        async getAllTags() {
            this.tags = await this.getTags
        },
        async toggleActiveTag(tagId) {
            await this.toggleTag(tagId)
            await this.updateFilter({ tags: this.getActiveTagTitles })
        },
        // isTagActive(tagId) {
        //     const tag = this.tags.find(tag => tag._id === tagId)
        //     return tag ? tag.isActive : false
        // },
        async addNewTag() {
            const tagTitle = prompt('מה שם הקטגוריה החדשה?')
            if (tagTitle) {
                await this.addTag({ title: tagTitle })
                await this.fetchTags()
            }
        },
        async deleteTag(tagId) {
            const confirmed = confirm('להסיר את הקטגוריה?')
            if (confirmed) {
                await this.removeTag(tagId)
                await this.fetchTags()
            }
        },
    },
    computed: {
        ...mapGetters(['getTags', 'getActiveTagTitles']),
    },
}
</script>