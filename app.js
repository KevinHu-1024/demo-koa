const Koa        = require('koa');
const app        = new Koa();
const Router     = require('koa-router');
const router     = new Router();
const views      = require('koa-views');
const co         = require('co');
const convert    = require('koa-convert');
const json       = require('koa-json');
const onerror    = require('koa-onerror');
const Bodyparser = require('koa-bodyparser');
const bodyparser = new Bodyparser();
const logger     = require('koa-logger');

const index      = require('./routes/index');
const users      = require('./routes/users');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
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

router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app;