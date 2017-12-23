/**
 * Created by zlf on 2017/12/17.
 */
/*
* 把一个urlJkbat地址参数反序列化为一个参数
* */
var querystring=require("querystring")
var url=require("url");

var urlJkbat='https://www.jkbat.com?id=4345&name=zhang';
var urlJkbatObj=url.
var query=

 console.log();
var param=;
console.dir(param)


//需求二:
//把一个参数对象序列化为字符串
var param={
    name:"vincent",
    age:"17",
    password:"123456"
}
var paramStr=querystring.stringify(param);
console.log(paramStr);

