<template>
	<div class = 'game'>
		<a :href = 'link' target = '_blank' class = 'game__link'>
			<div :class = '["game__image", noborder ? "noborder" : ""]'>
				<img
					:src = "require('../../img/games/' + id + '.png')"
					:alt = 'id'
				/>
			</div>
			<div class = 'game__info'>
				<h1 class = 'title'>{{ title }}</h1>
				<p class = 'description'>{{ description }}</p>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		props: ['id', 'title', 'description', 'link', 'noborder']
	}
</script>