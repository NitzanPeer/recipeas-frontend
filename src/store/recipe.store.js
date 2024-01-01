import { recipeService } from "../services/recipe.service.js"

export const recipeStore = {
    state: {
        recipes: [],
        filterBy: {},
        filteredRecipes: [],
        // tags: [],
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
            state.filterBy = filterBy
        },
        UPDATE_FILTERED_RECIPES(state, filteredRecipes) {
            state.filteredRecipes = filteredRecipes
        }
    },
    actions: {
        async fetchRecipes({ commit }, filterBy = { txt: '' }) {
            try {
                const recipes = await recipeService.getRecipes()
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
                dispatch('updateFilter', { txt: '' })
            } catch (error) {
                console.error('Error adding recipe:', error)
                throw error
            }
        },
        async updateRecipe({ commit, dispatch }, recipe) {
            try {
                await recipeService.updateRecipe(recipe)
                commit('UPDATE_RECIPE', recipe)
                dispatch('updateFilter', { txt: '' })
            } catch (error) {
                console.error('Error updating recipe:', error)
                throw error
            }
        },
        async removeRecipe({ commit, dispatch }, id) {
            try {
                await recipeService.removeRecipe(id)
                commit('REMOVE_RECIPE', id)
                dispatch('updateFilter', { txt: '' })
            } catch (error) {
                console.error('Error removing recipe:', error)
                throw error
            }
        },
        async updateFilteredRecipes({ commit, state }) {
            try {
                const { recipes, filterBy } = state
                const filteredRecipes = recipes.filter(recipe => {
                    return recipe.title.includes(filterBy.txt)
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
        }
    },
    getters: {
        getRecipes: state => state.recipes,
        getFilteredRecipes: state => state.filteredRecipes
    },
}