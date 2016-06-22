const Router = require('koa-router');
const router = new Router();
const index = require('../routes/index');
const user = require('../routes/user');
const share = require('../routes/share');

module.exports = (app) => {

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
