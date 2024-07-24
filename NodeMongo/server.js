

// //skip this go to rest API in that only mongodb connection is there 
// //mongodb connection .
// // const express=require('express');


// // const dotenv=require('dotenv')
// // dotenv.config()

// // const {MongoClient}=require('mongodb');

// // MongoClient.connect(process.env.Mongo_URI).then(()=>{
// //     console.log("mongodb connected successfully!");
// // }).catch((err)=>{
// //     console.log("error",err)
// // });

// // const app=express()

// // const PORT=5004;

// // app.listen(PORT ,()=>{
// //     console.log(`server started listening at port no ${PORT}`);
// // })









// ///////////////////////////////////////

// //RestAPI

// const express=require('express');
// const dotenv=require('dotenv');
// const bodyparser=require('body-parser');
// const mongoose=require('mongoose');


// const employeeRoutes=require('./routes/employeeRoutes')


// dotenv.config()
// const app=express();

// const PORT=process.env.PORT || 5400

// app.use(bodyparser.json())



// mongoose.connect(process.env.Mongo_URI)
// .then(()=>{
//     console.log("mongodb connected successfully!")
// })

//     .catch((error)=>{
//         console.log(`${error}`)
 
//     })
 

// app.use('/employees',employeeRoutes);

// app.listen(PORT,()=>{
//     console.log(`server started listening at the port ${PORT}`)
// })



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
app.get('/orange',(req,res)=>{
    res.render("samplePage")
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
app.use('/employees', employeeRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server started listening at port ${PORT}`);
});
