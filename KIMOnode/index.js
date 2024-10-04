const express=require('express')
const xyz=require('./code1')
const app=express(); // called the express function. started express app
console.log(xyz)
app.get('/',(req,res)=>{
res.send('Welcome to home page!')
})
app.get('/about',(req,res)=>{
    res.send('You are in about section.')
})
app.post('/adduser',(req,res)=>{
// write code to add data in mongodb
res.send({
    name:'sejal'
})
})
app.listen(3001,()=>{
    console.log('our server is live...')
})

//CRUD create - post , read - get , update - put / patch , delete - delete

//baseurl
//www.amazon.in/contact

