

//cors cross origin resource sharing for displaying in the data in the front end
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes');
const ejs=require('ejs');



//mvc-model controller views

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5401;

app.use(express.json());

app.set('view engine','ejs')
//client side rendering 
app.get('/mango',(req,res)=>{
    res.json({fruit:"mango"})
})


//server side rendering this is fast
app.get('/login',(req,res)=>{
    res.render("login")
})

app.get('/register',(req,res)=>{
    res.render("register")
})

app.get('/welcom',(req,res)=>{
    res.render("welcome")
})


mongoose.connect(process.env.Mongo_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((error) => {
        console.error(`MongoDB connection error: ${error}`);
        process.exit(1); // Exit process with failure code
    });

app.use(cors())
// app.use('/employees', employeeRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server started listening at port ${PORT}`);
});
