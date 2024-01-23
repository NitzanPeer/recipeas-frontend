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
        UPDATE_TAG(state, updatedTag) {
            state.tags = state.tags.map(tag => (tag._id === updatedTag._id ? updatedTag : tag));
        },
        TOGGLE_ACTIVE_TAG(state, tagId) {
            const tag = state.tags.find(tag => tag._id === tagId)
            if(tag) {
                tag.isActive = !tag.isActive
            } else {
                console.log('Tag not found')
            }
        },
        RESET_ACTIVE_TAGS(state) {
            state.tags.forEach(tag => {
                tag.isActive = false
            })
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
        async removeTag({ commit, dispatch, rootState, rootGetters }, id) {
            try {
                await tagService.removeTag(id)
                commit('REMOVE_TAG', id)
                commit('RESET_ACTIVE_TAGS')

                // dispatch to recipeStore
                dispatch('resetFilter')
                dispatch('fetchRecipes')

            } catch (error) {
                console.error('Error removing tag:', error)
                throw error
            }
        },
        async updateTag({ commit }, tag) {
            try {
                await tagService.updateTag(tag)
                commit('UPDATE_TAG', tag)
                commit('RESET_ACTIVE_TAGS')
            } catch (error) {
                console.error('Error updating tag:', error)
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
        async resetActiveTags({ commit }) {
            try {
                commit('RESET_ACTIVE_TAGS')
            } catch {

            }
        }
    },
    getters: {
        getTags: state => state.tags,

        // We keep only active tags using the filter method
        // and extract their ids using the map method:
        getActiveTagIds: state => state.tags.filter(tag => tag.isActive).map(tag => tag._id),
        // Same, with titles:
        getActiveTagTitles: state => state.tags.filter(tag => tag.isActive).map(tag => tag.title),

        getTagTitleById: state => tagId => {
            const tag = state.tags.find(tag => tag._id === tagId)
            return tag ? tag.title : null
        },

        getTagIdByTitle: state => tagTitle => {
            const tag = state.tags.find(tag => tag.title === tagTitle)
            return tag ? tag._id : null
        }
    },
}