import './scss/main.scss';
import './js/interact.js';
import {createApp} from 'vue';

import App from './app.vue';

let app = createApp(App).mount('#app');
/*

const blocks = [
	'header', 'profile', 'games'
]
let currentBlock = 0, lastScrollTop = 0;

window.onscroll = e => {
	

	const st = window.scrollY;
	if (st > lastScrollTop) {
		// downscroll code
		if (++currentBlock > blocks.length - 1) currentBlock = blocks.length - 1;
	} else if (st < lastScrollTop) {
		if (--currentBlock) currentBlock = 0;
	}

	const elem = document.getElementById(blocks[currentBlock]);
	if (!elem) return;
	lastScrollTop = elem.offsetTop;

    window.scrollBy({
        top: elem.offsetTop,
        behavior: 'smooth'
    });

    e.preventDefault();
    e.stopImmediatePropagation();
  	//window.scrollTo({ top: elem.offsetTop });
}*/