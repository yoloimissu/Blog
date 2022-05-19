let express = require('express'); //引入express模块
let Mock = require('mockjs'); //引入mock模块
let Random = Mock.Random

let app = express(); //实例化express
let Port = 9000;
let url = '/api/test'
app.all(url, function (req, res) {
  /**
  * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
  */
  res.json(Mock.mock({
    // "status": 200,
    "errno": 0,
    "data|20": [{
      "id|+1": 1,
      "string|1-10": "★",
      // 'color': '@color()',//随机颜色
      'date': '@datetime()',//随机时间
      // 'img': '@image()',//随机图片
      'img1': Random.image('600x600', '#846132'),//随机图片
      'img2': Random.image('600x600', '#a51369'),//随机图片
      'img3': Random.image('600x600', '#bababa'),//随机图片
      'img4': Random.image('600x600', '#323232'),//随机图片
      'img5': Random.image('600x600', '#565656'),//随机图片
      'img6': Random.image('600x600', '#9a9a9a'),//随机图片
      // 'url': '@url(http)',//随机url地址
      // 'email': '@email()',//随机email
      'name': "@name(1,2)",//随机英文名字
      "cname": "@cname",  //随机中文名字
      // 'text': '@paragraph()',//随机英文句子
      // 'title': '@ctitle',//穗子中文题目
      'city': '@county(true)',//随机城市名字
      'price': '@integer(100,2000)',//随机价格
      "value|0-500": 10,
      "FullReduction|0-1": 1,
      "PackageMail|0-1": 1,
      "brandName": "@csentence(3)",
      "productName": "@csentence(4,9)",
    }]
  }));
});

/*为app添加中间件处理跨域请求*/
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

/**
* 监听8090端口
*/
app.listen(Port, () => {
  console.log(`监听在:   127.0.0.1:${Port}${url}`);
})