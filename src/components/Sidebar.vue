<template>
    <button class="add-tag-btn" title="הוספת תגית" @click="addNewTag">
        <h4>הוספת קטגוריה</h4>
    </button>
    <ul class="tag-list clean-list">
        <li class="tag-btn" v-for="tag in tags" :class="`tag-${tag._id}`" :key="tag.title">
            <button class="tag-btn" :class="{ 'active-tag-btn': tag.isActive }"
            @click="toggleActiveTag(event, tag._id)"
            @contextmenu="showContextMenu($event, tag._id)"
            >
                {{ tag.title }}
            </button>
        </li>
    </ul>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            tags: [],
        }
    },
    async created() {
        await this.fetchTags()
        await this.resetTags()
    },
    methods: {
        ...mapActions(['fetchTags', 'addTag', 'removeTag', 'toggleTag', 'resetFilter', 'updateFilter']),
        async resetTags() {
            await this.getAllTags()
            await this.resetFilter()
        },
        async getAllTags() {
            this.tags = await this.getTags
        },
        async toggleActiveTag(event, tagId) {
            await this.toggleTag(tagId)
            await this.updateFilter({ tags: this.getActiveTagIds })
        },
        async addNewTag() {
            const tagTitle = prompt('מה שם הקטגוריה החדשה?')
            if (tagTitle) {
                await this.addTag({ title: tagTitle })
                await this.resetTags()
            }
        },
        async deleteTag(tagId) {
            const confirmed = confirm('להסיר את הקטגוריה?')
            if (confirmed) {
                await this.removeTag(tagId)
                await this.resetTags()
            }
        },
        showContextMenu(event, tagId) {
            event.preventDefault()
            // In the future rightclick will open a context menu for other options other than delete
                this.deleteTag(tagId)
        }
    },
    computed: {
        ...mapGetters(['getTags', 'getActiveTagIds']),
    },
}
</script>