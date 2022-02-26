const express = require('express');
const bodyParser = require('body-parser')
const employeeRouter=require("./Employee/router/employeeRouter")
const projectRouter=require("./Project/router/projectRouter")
const networkRouter=require("./Network/router/networkRouter")
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const port = process.env.port || 3000;

var fs = require('fs')

app.get('/', (req,res) => {
    res.send('Welcome to Express Server !')
});

app.use("/employee/",employeeRouter);
app.use("/project/",projectRouter);
app.use("/getEmployeeDetails/",networkRouter);
app.listen(port,function(err){
    if(err) throw err;
    console.log('server is running on port ' + port)
});

