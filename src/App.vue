<template>
	<div class="layout">
		<div class="header">
			<AppHeader />
		</div>
		<div class="main-content">
			<RouterView />
		</div>
		<div class="sidebar">
			<Sidebar />
		</div>
	</div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import Sidebar from './components/Sidebar.vue'


const route = useRoute()
const isHomeView = route.name === 'home'
console.log('route.name', route.name)
</script>
