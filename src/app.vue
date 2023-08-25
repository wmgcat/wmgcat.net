<template>
	<compHeader
		:info = 'info'
		:links = 'links'
	/>
	<compGames :games = 'games' id = 'games'/>
</template>

<script>
	// элементы страницы:
	import compGames from './components/games.vue';
	import compHeader from './components/header.vue';

	export default {
		data: function() {
			return {
			
				// информация обо мне:
				info: "Я — разработчик игр, веб-разработчик и художник. Разрабатываю игры на своем движке 42eng.js",

				// информация об играх:
				games: [
					{
						id: 'feedme',
						title: 'Накорми меня!',
						description: "Собирайте самые креативные бутерброды во вселенной!",
						link: 'https://yandex.ru/games/app/175689'
					},
					{
						id: 'defender',
						title: 'Защити флаг!',
						description: "Защищай флаг от нашествия врагов, прокачивай свои навыки и помощников!",
						link: 'https://www.crazygames.com/game/flag-defender',
						sublinks: {
							ya: "https://yandex.ru/games/app/225844",
							steam: "https://store.steampowered.com/app/2545760/Flag_Defender"
						}
					},
					{
						id: 'jujai',
						title: 'Соединялки',
						description: "Кормите и прокачивайте странных питомцев!",
						link: 'https://www.crazygames.com/game/connect-the-pets',
						sublinks: {
							ya: 'https://yandex.ru/games/app/177870'
						}
					},
					{
						id: 'skivltycoon',
						title: 'Скивл Тайкун',
						description: "Восстановите огород и накапливайте монеты!",
						link: 'https://yandex.ru/games/app/191333'
					},
					{
						id: 'wiztopia',
						title: 'Визтопия',
						description: "Спасите деревню от Зла, собрав все свитки!",
						link: 'https://wmgcat.itch.io/wiztopia',
						noborder: true
					},
					{
						id: 'wnfp',
						title: 'wnf: portals',
						description: "Соберите все звезды чтобы открыть порталы!",
						link: 'https://wmgcat.itch.io/why-not-frog-portals',
						noborder: true
					},
					{
						id: 'sotg',
						title: 'Story of the Gold',
						description: "Найдите все золото за 1 минуту, собрав все ключи!",
						link: 'https://wmgcat.itch.io/story-of-the-gold',
						noborder: true
					}
				],

				// ссылки на страницы на других площадках:
				links: [
					{
						title: 'Я.Игры',
						link: 'https://yandex.ru/games/developer?name=wmgcat',
						icon: 'ya'
					},
					{
						title: 'Itch.io',
						link: 'https://wmgcat.itch.io',
						icon: 'itch'
					},
					{
						title: 'Github',
						link: 'https://github.com/wmgcat',
						icon: 'github'
					}
				]
			}
		},
		components: {
			compHeader,
			compGames
		}
	}
</script>