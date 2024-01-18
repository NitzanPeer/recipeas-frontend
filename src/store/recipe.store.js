import { recipeService } from "../services/recipe.service.js"

export const recipeStore = {
    state: {
        recipes: [],
        filterBy: {},
        filteredRecipes: [],
    },
    mutations: {
        SET_RECIPES(state, recipes) {
            state.recipes = recipes
        },
        ADD_RECIPE(state, recipe) {
            state.recipes.push(recipe)
        },
        REMOVE_RECIPE(state, id) {
            state.recipes = state.recipes.filter(recipe => recipe._id !== id)
        },
        UPDATE_RECIPE(state, updatedRecipe) {
            const index = state.recipes.findIndex(recipe => recipe._id === updatedRecipe._id)
            if (index !== -1) {
                state.recipes.splice(index, 1, updatedRecipe)
            }
        },
        UPDATE_FILTERBY(state, filterBy) {
            if ('txt' in filterBy) {
                state.filterBy.txt = filterBy.txt
            }
            if ('tags' in filterBy) {
                state.filterBy.tags = filterBy.tags
            }
        },
        UPDATE_FILTERED_RECIPES(state, filteredRecipes) {
            state.filteredRecipes = filteredRecipes
        },

    },
    actions: {
        async fetchRecipes({ commit }, filterBy = { txt: '', tags: '' }) {
            try {
                const recipes = await recipeService.getRecipes(filterBy)
                commit('SET_RECIPES', recipes)
                commit('UPDATE_FILTERED_RECIPES', recipes)
            } catch (error) {
                console.error('Error fetching recipes:', error)
                throw error
            }
        },
        async addRecipe({ commit, dispatch }, recipe) {
            try {
                const newRecipe = await recipeService.addRecipe(recipe)
                commit('ADD_RECIPE', newRecipe)
                dispatch('resetFilter')
            } catch (error) {
                console.error('Error adding recipe:', error)
                throw error
            }
        },
        async updateRecipe({ commit, dispatch }, recipe) {
            try {
                await recipeService.updateRecipe(recipe)
                commit('UPDATE_RECIPE', recipe)
                dispatch('resetFilter')
            } catch (error) {
                console.error('Error updating recipe:', error)
                throw error
            }
        },
        async removeRecipe({ commit, dispatch }, id) {
            try {
                await recipeService.removeRecipe(id)
                commit('REMOVE_RECIPE', id)
                dispatch('resetFilter')
            } catch (error) {
                console.error('Error removing recipe:', error)
                throw error
            }
        },
        async updateFilteredRecipes({ commit, state }) {
            try {
                const { recipes, filterBy } = state

                const searchText = filterBy.txt || ''
                const searchTags = filterBy.tags || []

                const filteredRecipes = recipes.filter(recipe => {
                    const titleMatch = recipe.title.toLowerCase().includes(searchText.toLowerCase())
                    const tagMatch = searchTags.length === 0 || searchTags.every(tag => recipe.tags.includes(tag))

                    return titleMatch && tagMatch
                })
                commit('UPDATE_FILTERED_RECIPES', filteredRecipes)
            } catch (error) {
                console.error('Error updating filtered recipes:', error)
                throw error
            }
        },
        async updateFilter({ commit, dispatch }, newFilterBy) {
            try {
                commit('UPDATE_FILTERBY', newFilterBy)
                dispatch('updateFilteredRecipes')
            } catch (error) {
                console.error('Error updating filter:', error)
                throw error
            }
        },
        async resetFilter({ dispatch }) {
            try {
                dispatch('updateFilter', { txt: '', tags: [] })
            } catch (error) {
                console.error('Error reseting filter:', error)
                throw error
            }
        }
    },
    getters: {
        getRecipes: state => state.recipes,
        getFilteredRecipes: state => state.filteredRecipes,
        getFilterBy: state => state.filterBy
    },
}