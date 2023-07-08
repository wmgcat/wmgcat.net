<template>
	<div class = 'games'>
		<compGame v-for = 'game of games'
			:id = 'game.id'
			:title = 'game.title'
			:description = 'game.description'
			:link = 'game.link'
			:noborder = 'game.noborder'
			:sublinks = 'game.sublinks'
		/>
	</div>
</template>

<script>
	import compGame from './elements/game.vue';
	export default {
		components: { compGame },
		props: ['games']
	}
</script>