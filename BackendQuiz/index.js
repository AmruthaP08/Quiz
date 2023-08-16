const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// router
const userRegRoutes = require('./router/UserRouter');

const app = new express();


// database
mongoose.connect("mongodb+srv://amruthap8:d5TuXrvZdSv69fEj@cluster0.thrg5ui.mongodb.net/QuizApp?retryWrites=true&w=majority")
.then(()=>{
    console.log("Database Connected");
})
.catch(err=>console.log(err));

// midleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

// route
app.use(userRegRoutes);

const tagRouter=require('./router/addtags')
app.use('/',tagRouter);

// port
app.listen(4010,()=>{
    console.log("App is running in port 4010");
})
