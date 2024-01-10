<template>
	<div class="header">
		<AppHeader />
	</div>
	<div class="main-content">
		<div class="sidebar" v-if="isRecipesRoute">
			<!-- <div class="sidebar"> -->
			<Sidebar />
		</div>
		<div class="router">
			<RouterView />
		</div>
	</div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import Sidebar from './components/Sidebar.vue'


const route = useRoute()

let isRecipesRoute = null

if (route.name === 'recipes' || route.name === undefined) {
  isRecipesRoute = true
} else {
  isRecipesRoute = false
}

// const isRecipesRoute = route.name === 'recipes'
// const isRecipesView = this.$route.name === 'recipes'
console.log('route.name', route.name)

</script>
