const Employee = require('../models/Employee');

// Function to save an employee to the database
const createEmployee = async (req, res) => {
    try {
        const { name, mail, phone, city } = req.body; // Ensure field names match your schema

        // Create a new Employee instance
        const employee = new Employee({
            name,
            mail, // Changed from email to mail to match schema
            phone,
            city
        });

        // Save the employee to the database
        await employee.save();

        // Send a success response
        res.status(201).json(employee);
    } catch (err) {
        console.log("There is an error:", err);
        res.status(500).json({ message: 'Server error' }); // Corrected error response
    }
};



const getEmployee=async(req,res)=>{
    try{
        const employees=await Employee.find()
        res.status(200).json(employees)
    } catch(error){
        console.error("there is an error :",error)
        res.status(500).json({message:"server error"})
    }
}


const singleEmployee=async(req,res)=>{
    try{
        const employee=await Employee.findById(req.params.id)

        if(!employee){
            return res.status(404).json({message:"Employee not found "})
        }

        res.status(200).json(employee)
    }
    catch(error){
        console.error("there was an error ",error)
        res.status(500).json({message:"server error"})
    }
}


const updateEmployee=async(req,res)=>{
    try{
            const {name,mail,phone,city}=req.body

            const myEmployee=await  Employee.findByIdAndUpdate(
                req.params.id,{name,mail,phone,city}
            )

            if(!myEmployee){
                return res.status(200).json({message :"employee not found "})
            }
            res.status(200).json(myEmployee)
        }catch(error){
            console.error("there is an error :",error)
            res.status(500).json({message:"server error"})
        }
    }

const deleteEmployee=async(req,res)=>{
    try{
        const deleteEmployee=await Employee.findByIdAndDelete(req.params.id)
        res.status(204).send();

    }catch(err){
        console.error(err)
        res.status(500).json({message:"server error"})
    }
}



module.exports = { createEmployee ,getEmployee,singleEmployee,updateEmployee,deleteEmployee};
