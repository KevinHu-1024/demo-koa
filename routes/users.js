const Router = require('koa-router');
const router = new Router();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

module.exports = router;
