var Koa = require('koa');
var Router = require('koa-router');
var json = require('koa-json');
var app = new Koa();
var router = new Router();
app.use(json());
router.get('/', async (ctx) => {
    ctx.body = '欢迎访问首页'
}).get('/news', async (ctx) => {
    let jsonData = [
        {"stuName":"Tom","age":"18","sex":"1"},
        {"stuName":"Jack","age":"28","sex":"1"},
        {"stuName":"Mary","age":"20","sex":"0"}];
    ctx.set('content-type','application/json');            //设置输出格式
    ctx.body = {"code":200,"message":"ok","data":jsonData};
}).get('/sports', async (ctx) => {
    ctx.body = '运动模块'
}).get('/foods', async (ctx) => {
    ctx.body = '美食模块'
}),
//应用
    app.use(router.routes());
app.use(router.allowedMethods);
//开启监听
app.listen(5000);
