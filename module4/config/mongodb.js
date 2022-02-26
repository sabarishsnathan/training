const mongoDbCllient = require("mongodb").MongoClient;

// Step 2: Get Connection string
const url = "mongodb+srv://sabarishsnathan:Saba123@cluster0.x39tc.mongodb.net/cinemaapp?retryWrites=true&w=majority";


// Step 3: Connect to Mongodb Database server.

var dbClient;
exports.connect = ()=>{
    mongoDbCllient.connect(url)
        .then(
            (client)=>{
                dbClient = client;
                console.log("Mongodb is connected");
            },
            (err)=>{console.log(err);}
        )
}

exports.getCollection = (name)=>{
    return dbClient.db("cinemaapp").collection(name);
}