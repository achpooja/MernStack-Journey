const fs=require('fs')

// reading files //

// fs.readFile('./docs/blogs.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())

// })
// console.log('last line')


// writing files //

// fs.writeFile('./docs/blogs.txt','Hello baby',()=>{
//     console.log('file was written')
// }
// )
// console.log('End')


// fs.writeFile('./docs/blogs1.txt','Hello mumma',()=>{
//     console.log('file was written')
// })


// directories //

// if(!fs.existsSync('./assets')){
//  fs.mkdir('./assets',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('Folder created')
// })   
// }
// else {
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

// deleting files //

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if (err){
            console.log(err);
        }
        console.log('deleted')
    })
   }





  