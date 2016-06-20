const Router = require('koa-router');
const router = new Router();


router.get('/', async (ctx, next) => {
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
