var express = require('express');
var router = express.Router();
var employee=require("../controller/employeeController")
router.get('/',employee.getEmployeeDetails) 

module.exports = router;