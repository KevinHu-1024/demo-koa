const Router = require('koa-router');
const router = new Router();
const mocks = require('../mocks');

let mock = mocks.users.huke;

router.get('/', (ctx, next) => {
  ctx.body = 'this a users response!';
});

// 获取用户信息
router.get('/:id', (ctx, next) => {
  console.log('get /user/:id');
  ctx.body = mock;
});
module.exports = router;
