const Router = require('koa-router');
const router = new Router();


router.get('/', async (ctx, next) => {
  let data = [{
    name: "huke",
    age: "25",
    data: [{
      nothing: "none"
    }]
  }]
  await ctx.render('index', {
    data: JSON.stringify(data)
  });
})

// 用户注册
router.post('signup', (ctx, next) => {
  console.log('post /siginup');
  ctx.body = {name: 'aaa'};
});

// 用户登录
router.post('signin', (ctx, next) => {
  console.log('post /siginin');
});

module.exports = router;
