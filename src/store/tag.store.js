import { tagService } from "../services/tag.service.js"

export const tagStore = {
    state: {
        tags: [],
    },
    mutations: {
        SET_TAGS(state, tags) {
            state.tags = tags
        },
        ADD_TAG(state, tag) {
            state.tags.push(tag)
        },
        REMOVE_TAG(state, id) {
            state.tags = state.tags.filter(tag => tag._id !== id)
        },
        TOGGLE_ACTIVE_TAG(state, tagId) {
            const tag = state.tags.find(tag => tag._id === tagId)
            if(tag) {
                tag.isActive = !tag.isActive
            } else {
                console.log('Tag not found')
            }
        }
    },
    actions: {
        async fetchTags({ commit }) {
            try {
                const tags = await tagService.getTags()
                commit('SET_TAGS', tags)
            } catch (error) {
                console.error('Error fetching tags:', error)
                throw error
            }
        },
        async addTag({ commit }, tag) {
            try {
                const newTag = await tagService.addTag(tag)
                commit('ADD_TAG', newTag)
            } catch (error) {
                console.error('Error adding tag:', error)
                throw error
            }
        },
        async removeTag({ commit }, id) {
            try {
                await tagService.removeTag(id)
                commit('REMOVE_TAG', id)
            } catch (error) {
                console.error('Error removing tag:', error)
                throw error
            }
        },
        async toggleTag({ commit }, id) {
            try {
                commit('TOGGLE_ACTIVE_TAG', id)
            } catch (error) {
                console.error('Error adding tag:', error)
                throw error
            }
        },
    },
    getters: {
        getTags: state => state.tags,

        // we keep only active tags using the filter method
        // and extract thier titles using the map method:
        getActiveTagTitles: state => state.tags.filter(tag => tag.isActive).map(tag => tag.title),
    },
}