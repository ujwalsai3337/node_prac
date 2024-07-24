const express = require('express');

const employeeSchema = require('../models/Employee.js');

const employeeController = require('../controllers/employeeController.js');

const router = express.Router();

// get, post, put/patch, delete
router.post('/add-emp', employeeController.createEmployee);

router.get('/allemp', employeeController.getEmployee);

router.put('/update/:id', employeeController.updateEmployee); // Fixed route

// here : specifies that it is the dynamic value 
router.get('/:id', employeeController.singleEmployee);

router.delete('/delete/:id', employeeController.deleteEmployee); // Fixed route

module.exports = router;
