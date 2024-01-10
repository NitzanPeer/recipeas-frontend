import Vuex from 'vuex'

import { recipeStore } from './recipe.store.js'
import { tagStore } from './tag.store.js'

export const store = Vuex.createStore({
    strict: true,
    state: {},
    mutations: {},
    actions: {},
    modules: {
        recipeStore,
        tagStore,
    },
})
