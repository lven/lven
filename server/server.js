/**
 * Created by zlf on 2017/12/16.
 */
var http=require("http");
var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost:63342"});
    res.end("hello node.js")
}).listen(1000,"127.0.0.1");
console.info(process)
console.info("server 启动----")

