
console.log('welcome to node')
//  console.log(__dirname) // directory name --> current directory which u are working in
//  console.log(__filename)
 
 // how to import modules in nodejs
 const os=require('os')
//  console.log(os.arch())
//  console.log(os.cpus())
//  console.log(os.hostname())
//  console.log(os.homedir())
//  console.log(os.freemem())
//  console.log(os.machine())

 const path=require('path')
//  console.log(path.basename('/Volumes/Untitled/KIMOnode/localmodules.js'))
//  console.log(path.extname('/Volumes/Untitled/KIMOnode/localmodules.js'))
//  console.log(path.dirname('/Volumes/Untitled/KIMOnode/localmodules.js'))
// let mypath=path.parse('/Volumes/Untitled/KIMOnode/localmodules.js')
// console.log(mypath)

const fs=require('fs')
// fs.readFile('data.txt','utf8',function(err,data){
//     console.log( data)

// }) // 5 seconds

// fs.readFile('notes.txt','utf8',function(err,data){
//     console.log("notes data - " + data)


// }) //3 sec


//non blocking

// const file1=fs.readFileSync('data.txt')
// console.log(file1.toString())

// const file2=fs.readFileSync('notes.txt')
// console.log(file2.toString())

//write new data inside the file
fs.writeFile('data.txt',"hey there, this is my new data! ",function(err){
    if(err){
        console.log(err)
    }
    console.log('new data added!')
})

fs.appendFile('notes.txt',"add my new data in notes file",function(err){
    if(err){
        console.log(err)
    }
    console.log('data added in notes')
})