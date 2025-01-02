const express =require('express');


// express app //
const app = express();

// listen for requests//

app.listen(3030)
app.get('/',(req,res)=>{
    res.sendFile('./requestResponse/views/index.html',{root: __dirname});
// res.send('<p>Home Page</p>')
})
app.get('/about',(req,res)=>{
    res.sendFile('./requestResponse/views/about.html',{root: __dirname});

    // res.send('<p>Home Page</p>')
    })

// redirects //

app.get('/about-me',(req,res)=>{
    res.redirect('/about')
})

// 404 Page //

app.use((req, res)=>{
    res.sendFile('./requestResponse/views/404.html',{root: __dirname})
})
