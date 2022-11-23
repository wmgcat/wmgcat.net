'use strict';

let LANGS = {};

const add_lang = file => {
  let script = document.createElement('script');
  script.src = file;
    script.onload = () => {
      let langmenu = document.querySelector('ul.lang');
      if (langmenu) {
        LANGS[dataLang.title] = dataLang;
        console.log(LANGS[dataLang.title]);
        let li = document.createElement('li');
        li.innerText = dataLang.title;
        langmenu.appendChild(li); 
        li.onclick = function() {
          let select = document.querySelector('ul.lang li.select');
          if (select) {
            select.className = '';
            this.className = 'select'; 
            let items = document.querySelectorAll('*[lang-id]');
            items.forEach(elem => {
              elem.innerText = LANGS[this.innerText][elem.getAttribute('lang-id')] || elem.innerText;
            });
          }
        }
        if (dataLang.title == 'english') {
          li.className = 'select';
          li.onclick();
        }
      }
    }
    script.onerror = () => { return console.log('error', file); }
    document.body.appendChild(script);
}

