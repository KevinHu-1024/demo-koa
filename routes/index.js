const Router = require('koa-router');
const router = new Router();
const User = require('../models/User');

router.get('/', async (ctx) => {
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
router.post('signup',  (ctx) => {
  console.log(1);
  console.log(ctx.request.body);
  let {
    userId = '',
    name  = '',
    email  = '',
    password = '',
    userSharedIds = '',
    userStaredIds  = '',
    userIgnoredIds = ''
  } = ctx.request.body;
  let user = new User({
    userId: userId,
    name : name,
    email : email,
    password: password,
    userSharedIds: userSharedIds,
    userStaredIds : userStaredIds,
    userIgnoredIds: userIgnoredIds
  });
  user.save(err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('success');
  })
});

// 用户登录
router.post('signin', (ctx) => {
  console.log('post /siginin');
});

module.exports = router;
