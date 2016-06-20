const Router = require('koa-router');
const router = new Router();


router.get('/', async (ctx, next) => {
  // ctx.state = {
  //   title: 'koa2 title'
  // };

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
module.exports = router;
