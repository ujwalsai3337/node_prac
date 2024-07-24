


const express=require('express');

const app=express();


//app.use is removed from the middleware generally app.use is used when  this middle ware needs to be applied to all the routes     
const firsthandler=(req,res,next)=>{
    if (false){
        next();
    }else{
        console.log("sorry you are not allowed  ");
    }

};

const secondhandler=(req,res,next)=>{
    if (true){
        next();
    }

};

app.get('/new',firsthandler,(req,res)=>{
    res.send("this is the new page ");
    
});

app.get('/new2',secondhandler,(req,res)=>{
    res.send("this is the second page ");
})


const PORT=5222;

app.listen(PORT,()=>{
    console.log("server listening in the port no 5222");
});