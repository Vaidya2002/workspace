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

const pttp = require('http')
const data = require('./data')

pttp.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\JSON '});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);

