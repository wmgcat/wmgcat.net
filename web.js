function add_block(name, screens) {
	let content = document.getElementById('content'),
		block = document.createElement('div');
	block.className = 'game';
	block.setAttribute('alt', name);
	let banner = document.createElement('div');
	banner.className = 'banner';
	let blscreen = document.createElement('div');
	blscreen.className = 'screenshots';
	(screens || []).forEach(function(path, i) {
		let img = document.createElement('img');
		img.src = './games/' + name + '/' + path;
		img.alt = name + '.screen' + (i + 1);
		blscreen.appendChild(img);
	});
	banner.appendChild(blscreen);
	let imgbanner = document.createElement('img');
	imgbanner.src = './games/' + name + '/banner.png';
	imgbanner.alt = name + '.banner';
	banner.appendChild(imgbanner);
	block.appendChild(banner);
	let info = document.createElement('a');
	info.href = './games/' + name + '/index.html';
	info.className = 'info';
	let avatar = document.createElement('img');
	avatar.src = './games/' + name + '/avatar.png';
	avatar.alt = name + '.avatar';
	info.appendChild(avatar);
	let title = document.createElement('h1');
	title.innerText = name;
	info.appendChild(title);
	block.appendChild(info);
	content.appendChild(block);
}



window.onload = function() {
	add_block('wabaton', ['screen1.png', 'screen2.png', 'screen3.png']);
	add_block('wabaton', ['screen1.png', 'screen2.png', 'screen3.png']);
	add_block('wabaton', ['screen1.png', 'screen2.png', 'screen3.png']);
	add_block('wabaton', ['screen1.png', 'screen2.png', 'screen3.png']);
	add_block('wabaton', ['screen1.png', 'screen2.png', 'screen3.png']);
	add_block('wabaton', ['screen1.png', 'screen2.png', 'screen3.png']);
	add_block('wabaton', ['screen1.png', 'screen2.png', 'screen3.png']);
	add_block('wabaton', ['screen1.png', 'screen2.png', 'screen3.png']);
	document.querySelectorAll('.game').forEach(function(block) {
		block.onmouseenter = function() {
			let screens = block.querySelector('.screenshots').children, banner = block.querySelector('.banner > img');
			block.setAttribute('banner', banner.src);
			block.count = 0
			function screenShow() {
				banner.src = screens[block.count].src;
				block.count = (block.count + 1) % screens.length;
			}
			block.timer = setInterval(screenShow, 1000);
			screenShow();
		}
		block.onmouseleave = function() {
			block.querySelector('.banner > img').src = block.getAttribute('banner');
			clearInterval(block.timer);
		}
	});
}