
const express=require('express');

const app=express();

app.get("/apple",(req,res)=>{
    res.send("apple is red in color");
});



// app.get("",(req,res)=>{
//     res.send("somet text "); 
// });











//here the middleware is applied for all the routes 

//defining the middle ware that is app.use 

//multiple middle wares can be defined
app.use((req,res,next)=>{
    if (true){   //try with false and change the end point in the browser.
        next();
    }
});

app.get('/home',(req,res)=>{
    res.send("This is the Home page ");
});



app.get('/about',(req,res)=>{
    res.send("This is the About  page ");
})





app.get('/user/121',(req,res)=>{
    res.send("This is the user 121 page ");
})

const PORT=5001

app.listen(PORT,()=>{
    console.log("server is listening successfully");
});