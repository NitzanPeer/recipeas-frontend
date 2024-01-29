<template>
		<div class="header">
			<AppHeader :isRecipesRoute="isRecipesRoute"/>
		</div>
		<div class="main-content" :class="{ 'hide-sidebar': !isRecipesRoute }">
			<div class="sidebar" v-if="isRecipesRoute">
				<Sidebar />
			</div>
			<div class="router">
				<RouterView />
			</div>
		</div>
</template>

<script setup>
import { ref, watch } from "vue"
import { RouterLink, useRoute } from 'vue-router'

import AppHeader from './components/AppHeader.vue'
import Sidebar from './components/Sidebar.vue'


// checks whether we are in the 'recipes' route using a watcher,
// so the app knows which parts to show / hide at any given time
let isRecipesRoute = ref(null)
const route = useRoute()

watch(route, (newValue, oldValue) => {
	isRecipesRoute.value = newValue.name === 'recipes'
})

</script>

<style src="@vueform/multiselect/themes/default.css"></style>