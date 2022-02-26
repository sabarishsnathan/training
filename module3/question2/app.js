const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const employeeRouter=require("./Employee/router/employeeRouter")
const port = 4000;
app.use(bodyParser.json())
// Static file path
app.use(express.static(__dirname+'/public'));
// Html or rending Path
app.set('views', './views');
// View engine specification
app.set('view engine', 'ejs');

app.use("/employee",employeeRouter);

app.get('/', (req,res) => {
    res.send('Welcome to Express Server !')
});

// request api without promise


app.listen(port ,(err) => {
    if(err) { console.log('error in api call')}
    else{ 
        console.log('app is running on port ' + port)
    }
})