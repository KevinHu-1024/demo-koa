const Router = require('koa-router');
const router = new Router();

const convert = require('koa-convert');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
const users = require('./routes/users');

module.exports = (app) => {
  app.use(convert(bodyparser));
  app.use(convert(json()));
  app.use(convert(logger()));

  router.use('/', index.routes(), index.allowedMethods());
  router.use('/users', users.routes(), users.allowedMethods());

  // 用户注册
  router.post('/signup', (ctx, next) => {

  })

  // 用户登录
  router.post('/signin', (ctx, next) => {

  })

  // 发布分享
  router.post('/share', (ctx, next) => {

  })

  // 获取所有分享
  router.get('/share', (ctx, next) => [

  ])

  // 作者更新分享
  router.put('/share/:id', (ctx, next) => {

  })

  // 获取用户信息
  router.get('/user/:id', (ctx, next) => {
    
  })

  app.use(router.routes(), router.allowedMethods());
  // response

  app.on('error', function(err, ctx){
    console.log(err)
    logger.error('server error', err, ctx);
  });
}
