process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require('express'),
      app = express(),
      fs = require('fs'),
      https = require('https'),
      http = require('http'),
      path = require('path'),
      { I18n } = require('i18n'),
      cookieParser = require('cookie-parser'),
      cors = require('cors'),
      proxy = require('express-http-proxy');

const port = 443,
      API = 'http://localhost:3001';

const i18n = new I18n({
  locales: ['en', 'fr', 'de', 'ja', 'ch', 'ru'],
  directory: path.join(__dirname, 'src/locales'),
  defaultLocale: 'en',
  cookie: 'lang',
  syncFiles: true,
  updateFiles: true
});


app.set('view engine', 'ejs');
app.use(cookieParser());
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/lgames', express.static(path.join(__dirname, 'games')));
app.use(i18n.init);
app.use(cors());

app.use('/api', proxy('http://localhost:3001'));
app.use('/shop', proxy('http://localhost:3002'));

app.get('/', async (req, res) => {
  try {
    const games = await fetch(`${API}/games/random?count=3`).then(e => e.json()),
          creatives = await fetch(`${API}/creatives/random?count=3`).then(e => e.json());
    if (games.status != 'ok' || creatives.status != 'ok')
      throw games.msg || creatives.msg;

    games.data.content = games.data.content.map(item => {
      item.links = JSON.parse(item.links);
      return item;
    });

    res.render('pages/index', {
      content: {
        games: games.data.content,
        creatives: creatives.data.content
      }
    })
  }
  catch(err) {
    res.render('pages/error', {
      msg: err
    });
  }
});

app.get('/game/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!(id - 0)) throw 'ID is not defined';

    const result = await fetch(`${API}/games/${id}`).then(e => e.json());
    if (result.status != 'ok') throw result.msg;

    result.data.links = JSON.parse(result.data.links);
    let link = '/nopage';
    if (result.data.links.filter(x => x.type == 'wmgcat')[0])
      link = `/lgames/${result.data.title.toLowerCase()}/index.html`;

    res.render('pages/game', {
      ...result.data,
      path: link,
      banner: result.data.path
    });
  }
  catch(err) {
    res.render('pages/error', {
      msg: err
    })
  }
});

app.get('/:category/:page', getCategoryContent);
app.get('/:category', getCategoryContent);

async function getCategoryContent(req, res) {
  try {
    let { category } = req.params;
    const page = req.query.page || 1;

    const count = 4, offset = count * (page - 1);
    switch(category) {
      case 'games':
        case 'creatives': {
          try {
            const result = await fetch(`${API}/${category}?offset=${offset}&count=${count}`).then(e => e.json());
            if (result.status != 'ok') throw result.msg;

            if (category == 'games')
              result.data.content = result.data.content.map(item => {
                item.links = JSON.parse(item.links);
                return item;
              });

            res.render('pages/content', {
              category: category,
              [category]: result.data.content,
              page: page,
              pages: Math.ceil(result.data.max / count)
            })
          }
          catch(err) {
            console.log('get', `api/${category}`, err);
            res.status(401).render('pages/error', {
              msg: err
            });
            return;
          }
      } break;
      default: res.redirect('/'); break;
    }
  }
  catch(err) {
    res.render('pages/error', {
      msg: err
    });
  }
}

const httpsServer = https.createServer({}, app),
      httpServer = http.createServer(app);

httpServer.listen(80, () => {
  console.log(':80 is running!');
});

httpsServer.listen(port, () => {
  console.log(':443 is running!');
});