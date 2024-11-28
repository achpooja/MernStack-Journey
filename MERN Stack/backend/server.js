// runs Nodemon without needing to install it globally:
// ---npx nodemon your-app.js--- 
// ---using this nodeman we dont need to run the application everytime when we change something 
// --- here we can run the command 'npm run dev' by storing nodeman server.js in dev inside the package.json but we didn't install it we cant perform it
// --- dont be confused that you created the dev scripts inside the package.json


require('dotenv').config()

// create express application
const express= require('express')
const mongoose= require('mongoose')
const workoutRoutes=require('./routes/workouts')

// express app 
const app=express()

// middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// app.get('/',(req,res)=>{
//     res.json({mssg: 'Welcome to the app hello'})
// })

// routes 
app.use('/api/workouts',workoutRoutes)
 // connect to db
 mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    // listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('connected to db & listening on port',process.env.PORT)
})

 })
 .catch((error)=>{
    console.log(error)

 })

 