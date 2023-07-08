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
		<div class = 'sublinks' v-if='typeof(sublinks) != "undefined"'>
			<compLink v-for = '[linkid, href] of Object.entries(sublinks)'
				:link = 'href'
				:icon = 'linkid'
			/>
		</div>
	</div>
</template>

<script>
	import compLink from './listlink.vue';
	export default {
		props: ['id', 'title', 'description', 'link', 'noborder', 'sublinks'],
		components: { compLink }
	}
</script>