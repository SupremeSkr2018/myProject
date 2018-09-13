var Koa = require('koa')
var Router = require('koa-router')
//导入静态资源模块
var static = require('koa-static')
var app = new Koa();
//配置static  使用atic
app.use(static('public'));
var router = new Router();
router.get('/', async (ctx) => {
        ctx.body = '欢迎访问首页'
    }).get('/news', async (ctx) => {
        ctx.body = '新闻模块'
    }).get('/sports', async (ctx) => {
        ctx.body = '运动模块'
    }).get('/foods', async (ctx) => {
        ctx.body = '美食模块'
    }),
//应用
    app.use(router.routes());
    app.use(router.allowedMethods);
//开启监听
    app.listen(5000)
