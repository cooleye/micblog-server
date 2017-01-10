var express = require('express');
var router = express.Router();
var fs = require('fs');

var PATH ='./public/data/';


//设置跨域访问
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getnews',function(req,res,next){
  

 fs.readFile( PATH + 'message.json', function (err, data) {
   if (err) {
       return console.error(err);
   }
  //  console.log("异步读取: " + data.toString());
  res.send(data.toString());
});

})

module.exports = router;
