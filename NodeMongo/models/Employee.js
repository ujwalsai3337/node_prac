//here the name of the file is Employee not Employees because when er create Employee then in the db it is stored as Employees
//first letter of the file in  captial


const mongoose=require('mongoose');
const employeeSchema=new mongoose.Schema({
    //name,mail,phone,city
    name:{
        type:String,
        required:true
    },

    mail:{
        type:String,
        required:true
    },

    phone:{
        type:Number,
        default:false

    },

    city:{
        type:String,
        default:false
    }
})



module.exports=mongoose.model('Employee',employeeSchema);