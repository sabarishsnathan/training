var express = require('express');
var router = express.Router();
var project=require("../controller/projectController")
router.get('/:id',project.getProjectDetails) 

module.exports = router;