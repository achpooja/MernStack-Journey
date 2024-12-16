// Global Object
// setTimeout(()=>{
//     console.log("Hello emerging world!")
// },3000)


// console.log(__dirname)  // provide the absolute path to the directory
// console.log(__filename) // provide the absoulte path to the file


var http =require('http')

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.end('Hello Node js World!')
// }).listen(8080)

const server =http.createServer((req,res)=>{
    console.log('request made')
})

server.listen(8080,'localhost',()=>{
    console.log('listening on port 8080')
}
)

