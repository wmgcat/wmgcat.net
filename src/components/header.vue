<template>
	<header>
		<div class = 'parallax'>
			<img class = 'parallax__left' src = '../img/leftBorder.png' />
			<img class = 'parallax__avatar' src = '../img/avatar.png' />
			<div class = 'parallax__bottom'></div>
		</div>
		<compProfile
			:info = 'info'
			:links = 'links'
		/>
	</header>
</template>

<script>
	import compProfile from './profile.vue';

	export default {
		components: { compProfile },
		props: ['info', 'links']
	}
</script>