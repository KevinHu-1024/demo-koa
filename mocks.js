exports.share = {
  shares: [
    {
      shareId: '001',
      title: 'ES6分享',
      detail: 'ES6又成ES2015，是ECMA的下一个版本\n本周分享ES6的使用及与ES5的区别。',
      author: '胡可',
      status: 'open',
      likedCount: 2,
      canceledCount: 1
    },
    {
      shareId: '002',
      title: '下一代web服务框架——KOA',
      detail: 'ES6又成ES2015，是ECMA的下一个版本\n本周分享ES6的使用及与ES5的区别。',
      author: '桑世龙',
      status: 'open',
      likedCount: 2,
      canceledCount: 1
    },
    {
      shareId: '003',
      title: '托福模考',
      detail: 'Electricon 开发经验',
      author: '李祖德',
      status: 'open',
      likedCount: 2,
      canceledCount: 1
    },
    {
      shareId: '004',
      title: 'React & Redux',
      detail: 'Redux原理解读',
      author: '王凯',
      status: 'open',
      likedCount: 2,
      canceledCount: 1
    }
  ]
};

exports.users = {
  huke: {
    id: 123,
    name: '胡可',
    userSharesId: ['001'],
    userLikedId: ['002'],
    // 自己不能喜欢自己的分享
    userCanceledId: ['003, 004']
  }
};