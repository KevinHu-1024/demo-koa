const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const onerror = require('koa-onerror');
const mongoose = require('mongoose');
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const logger = require('koa-logger');

app.use(bodyparser());
app.use(json());
app.use(logger());

const router = require('./common/router');
const dbConfig = require('./config/db');

mongoose.connect('mongodb://' + dbConfig.host + ':' + dbConfig.port);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connected on ' + 'mongodb://' + dbConfig.host + ':' + dbConfig.port);
});


// TODO: 需增加监视进程，当应用终止是关闭数据库
// TODO: 需要增加数据库用户权限控制、只允许本地连接

// middlewares
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'jade'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// router
router(app);

module.exports = app;