var router = require('express').Router();

router.route('/register')
    // 返回注册页面
    .get(function (req, res) {
      res.render('account/register', {title: '注册'});
    })
    // 接受用户表单
    .post(function (req, res, next) {
        var username = req.body.username,
            password = req.body.password;

        console.log('Register post received!');
        console.log('username:', username, 'password::', password);
        res.end('成功收到POST请求');
    });
router.route('/index').get(function(req,res){
  res.render('account/index');
});
router.route('/login').get(function(req,res){
  res.render('account/login');
});

module.exports = router;
