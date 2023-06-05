<template>
	<div class = 'profile'>
		<h1 class = 'profile__title'>Обо мне</h1>
		<div class = 'profile__info'>
			<p class = 'profile__info-description'>
				{{ info }}
			</p>
		</div>
		<h1 class = 'profile__title'>Ссылки</h1>
		<div class = 'profile__links'>
			<compLink v-for = 'link of links' 
				:title = 'link.title'
				:link = 'link.link'
				:icon = 'link.icon'
			/>
		</div>
	</div>
</template>

<script>
	import compLink from './elements/listlink.vue';

	export default {
		components: { compLink },
		props: ['links', 'info']
	}
</script>