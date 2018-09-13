
var Koa = require('koa')

var Router = require('koa-router')

var app = new Koa();

var router = new Router()

router.get('/',async (ctx)=>{
    ///let query = ctx.query；          //获取Get传参方式 一
    let query = ctx.request.query;     //获取Get传参方式 二
    console.log(query);
    ctx.body = '欢迎访问首页'
}).get('/news',async (ctx) => {
    ctx.body = '新闻模块'
}).get('/sports',async (ctx) => {
    ctx.body = '运动模块'
}).get('/foods',async (ctx) => {
    ctx.body = '美食模块'
}).get('/:id/:name',async (ctx)=>{
    let query = ctx.params;          //获取RESTF传参方式
    console.log(query);
    ctx.body = '欢迎访问首页'
}).post('/',async (ctx)=>{
    let query = ctx.request.body;          //获取POST传参方式
    console.log(query);
    ctx.body = '欢迎访问首页'
}),

//应用
app.use(router.routes())
app.use(router.allowedMethods)
//开启监听
app.listen(5000);