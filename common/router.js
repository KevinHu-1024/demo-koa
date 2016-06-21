const Router = require('koa-router');
const router = new Router();

const convert = require('koa-convert');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('../routes/index');
const user = require('../routes/user');
const share = require('../routes/share');

module.exports = (app) => {
  app.use(convert(bodyparser));
  app.use(convert(json()));
  app.use(convert(logger()));

  router.use('/', index.routes(), index.allowedMethods());
  router.use('/user', user.routes(), user.allowedMethods());
  router.use('/share', share.routes(), share.allowedMethods());

  app.use(router.routes(), router.allowedMethods());
  // response

  app.on('error', function(err, ctx){
    console.log(err)
    logger.error('server error', err, ctx);
  });
};
