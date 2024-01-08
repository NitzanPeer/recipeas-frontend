<template>
		<div class="header">
			<AppHeader />
		</div>
		<div class="main-content">
			<!-- <div class="sidebar" v-if="isRecipesView"> -->
			<div class="sidebar">
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
// const isHomeView = route.name === 'home'
const isRecipesView = route.name === 'recipes'

console.log('route.name', route.name)
</script>
