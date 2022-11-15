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
	info.href = './player.html?name=' + name;
	//info.href = './games/' + name + '/index.html';
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
	// configure:
	/*add_config('./games/' + name + '/config.js', function() {
		block.style.background = data.colour;
		info.style.boxShadow = '0 0 15px ' + data.colour;
	});*/
}
function add_config(path, func) {
	let script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = path;
	script.onerror = function() { console.log('error config load!'); }
	script.onload = func;
	document.body.appendChild(script);
}
