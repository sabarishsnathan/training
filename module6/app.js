import express from 'express'
import bodyParser from 'body-parser'
import bugsRouter from './bugs/router/bugsRouter.js';
const app = express();
import mongodb from "./config/mongodb.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: false }))
mongodb.connect();
// Static file path
app.use(express.static(__dirname+'/public'));
// Html or rending Path
app.set('views', './views');
// View engine specification
app.set('view engine', 'ejs');
// parse application/json
app.use(bodyParser.json())

const port = process.env.port || 3000;


app.get('/', (req,res) => {
    res.send('Welcome to Express Server !')
});

app.use("/bugs/",bugsRouter);
app.listen(port,function(err){
    if(err) throw err;
    console.log('server is running on port ' + port)
});

