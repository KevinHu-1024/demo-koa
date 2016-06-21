const Router = require('koa-router');
const router = new Router();
const mocks = require('../mocks');


let shares = mocks.share.shares;

// 发布分享
router.post('/', (ctx, next) => {
  console.log('post /share');
});

// 获取所有分享
router.get('/', (ctx, next) => {
  console.log('get /share');
  ctx.body = shares;
});

// 作者更新分享
router.put('/:id', (ctx, next) => {
  console.log('put /share');
});

module.exports = router;