<template>
	<div class = 'link'>
		<a :href = 'link' class = 'link__href' target = '_blank'>
			<span class = 'link__icon'>
				<img
					:src = "require('../../img/icons/' + icon + '.png')"
					:alt = 'icon'
				/>
			</span>
			<h1 class = 'link__title' v-if = 'title'>{{ title }}</h1>
		</a>
	</div>
</template>

<script>
	export default {
		props: ['link', 'title', 'icon']
	}
</script>