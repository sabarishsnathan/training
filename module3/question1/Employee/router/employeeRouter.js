var express = require('express');
var router = express.Router();
var employee=require("../controller/employeeController")
router.get('/:id',employee.getEmployeeDetails) 

module.exports = router;