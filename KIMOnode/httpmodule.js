const http=require('http')
const fs=require('fs')
http.createServer(function(req,res){
const url=req.url
console.log(typeof url)
if(url =='/'){
fs.readFile('data.txt',(err,data)=>{
    console.log(data)
    res.write(data)
})
if(url==='/about'){
    res.write('you are on about page')
}
}
// res.write('welcome to my serevr')
res.end()
}).listen(8080)