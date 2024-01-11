<template>
	<div class="header">
		<AppHeader />
	</div>
	<div class="main-content" v-bind:class="{ 'hide-sidebar': !isRecipesRoute }">
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


const route = useRoute()

let isRecipesRoute = ref(null)

// const theme = computed(() => isRecipesRoute ? '' : 'hide-sidebar');

watch(route, (newValue, oldValue) => {
	isRecipesRoute.value = newValue.name === 'recipes'
})

</script>
