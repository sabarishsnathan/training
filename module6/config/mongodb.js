import mongodb from "mongodb";
var mongoDbCllient=mongodb.MongoClient;
// Step 2: Get Connection string
const url = "mongodb+srv://sabarishsnathan:Saba123@cluster0.x39tc.mongodb.net/trainingapp?retryWrites=true&w=majority";


// Step 3: Connect to Mongodb Database server.

var dbClient;
var connect = ()=>{
    mongoDbCllient.connect(url)
        .then(
            (client)=>{
                dbClient = client;
                console.log("Mongodb is connected");
            },
            (err)=>{console.log(err);}
        )
}

var getCollection = (name)=>{
    return dbClient.db("trainingapp").collection(name);
}


export default {connect,getCollection}