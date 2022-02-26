const express = require('express');
const bodyParser = require('body-parser')
const moviesRouter=require("./Movies/router/movieRouter")
const app = express();
const mongodb = require("./config/mongodb");

app.use(bodyParser.urlencoded({ extended: false }))
mongodb.connect();
// parse application/json
app.use(bodyParser.json())

const port = process.env.port || 3000;

var fs = require('fs')

app.get('/', (req,res) => {
    res.send('Welcome to Express Server !')
});

app.use("/movies/",moviesRouter);
app.listen(port,function(err){
    if(err) throw err;
    console.log('server is running on port ' + port)
});

