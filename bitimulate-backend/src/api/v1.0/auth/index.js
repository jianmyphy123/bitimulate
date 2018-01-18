const Router = require('koa-router');

const auth = new Router();
const authCtrl = require('./auth.ctrl');

auth.get('/', ctx => {
  ctx.body = 'Hi'
})

module.exports = auth;
