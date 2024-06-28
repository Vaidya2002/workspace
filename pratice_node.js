const { rejects } = require('assert')
const pratice2 = require('./pratice2')
// console.log(pratice2.z())

 arr = [5,8,3,4,5,3,8,4,5,8]
let arry = arr.filter((item)=>{
    return item > 5
})

// console.log(arry)
// const fs= require('fs').writeFileSync('pawan.text','hello pawan')
// console.log('------>', __filename);
// fs.writeFileSync('pawan.text', 'hello pawan')


// const http = require('http');

// http.createServer((req, resp)=>{
//     resp.write('<h1>Hello</h1>');
//     resp.end();
// }).listen(4333);



// const mat =(a)=>a*10
// console.log(mat(2));
// console.log(mat(3));



// const pttp = require('http')
// const data = require('./data')

// pttp.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\JSON '});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);

// ------------------------------

// console.log(process.argv[5])

// const fs = require('fs')
// const input = process.argv;

// if(input[2] == 'add')
//     {
//         fs.writeFileSync(input[3], input[4])
//     } else if(input[2]=="remove") 
//     {
//         fs.unlinkSync(input[3])
//     }
//     else{
//         console.log("invail output")
//     }

// ------------------------------

// const fs= require('fs');
// const path = require('path');
//  const dirpath=path.join(__dirname,'files');

// for(i=0;i<4;i++){
//     fs.writeFileSync(`${dirpath}/hello${i}.txt`,`a simple text file ${i}`)
// }

// fs.readdir(dirpath,(err,files)=>{
//     console.warn(files)
// })

// fs.readdir(dirpath,(err,files)=>{
//     files.forEach((item)=>{
//          console.log("file name is",item)
//     })
// })

ary=[1,2,3]
// ary.forEach((item)=>{console.log("hello",item)})
// ----------------------------------------

const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'crud');

const filepath = `${dirpath}/apple.txt`

// fs.writeFileSync(filepath,"apple file.text one")
// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filepath,'hello pawan',(err)=>{
//     if(!err)console.log("update the file ")
// })

// fs.rename(filepath,`${dirpath}/pawan.txt`,(err)=>{
//     if(!err)console.log("file name is upadate")
// })

// fs.unlinkSync(`${dirpath}/pawan.txt`)

// -----------------------------------------

// console.log("start exe1.......")

// setTimeout (()=>{
//     console.log("start exe2.......")
// },2000)

// console.log("start exe3.......")


let a = 20
let b = 0

let waitingData = new Promise((resolve,rejects)=>{
    setTimeout(()=>{
          resolve(b = 20)
    },2000)
})

waitingData.then((data)=>{
    
    // console.log(a + data)
})


// -----------------------------------------
const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send('hello, this is home page')
});

app.get('/index',(req,res)=>{
    res.send('hello, this is index page')
});

app.listen(4300);