//  Status Code //

// 200 - OK 
// 301 - Resource moved 
// 404 - Not Found 
// 500 - Internal server error
// 100 Range - informational responses 
// 200 Range - success codes 
// 300 Range - codes for redirects 
// 400 Range - used or client error codes
// 500 Range - server error codes

const http = require('http')
const fs =require('fs') 
const _ = require('lodash')


const server= http.createServer((req,res)=>{
    // console.log(req.url,req.method)

    // lodash //
    const num = _.random(0,20)
    console.log(num)

    const greet =_.once(()=>{
        console.log('Hello Everyone!')
    })

    greet ()
    greet ()

// set header content type
res.setHeader('Content-Type', 'text/html')
// res.write('<head><link rel="stylesheet" href="#"></link></head>')
// res.write('<p>Hello warrior!</p>')
// res.write('<p>How you doing!</p>  ')

// basic routing //

let path ='./views/'

switch(req.url){
    case '/':
        path+='index.html'
        res.statusCode = 200
        break
    case '/about':
        path+='about.html'
        res.statusCode = 200
        break

        // redirects //
    case '/about-me':
        res.statusCode = 301
        res.setHeader('Location', '/about')
        res.end()
        break    
    default:
        path+='404.html' 
        res.statusCode = 404
        break       

}

// send an html file //

fs.readFile(path,(err,data)=>{
      if(err){
        console.log(err)
        res.end()
      } else{
        res.write(data)
        res.end()
      }
})
// res.end()

})

server.listen(3000,'localhost',()=>{
    console.log('listening on port 3000')
})