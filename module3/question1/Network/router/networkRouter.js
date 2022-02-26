var express = require('express');
var router = express.Router();
var network=require("../controller/networkController")
router.get('/:id',network.getEmployeeDetails) 

module.exports = router;