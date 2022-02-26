
var mongodb=require("../../config/mongodb")
const { ObjectId } = require("mongodb");
exports.addMovies=(movieModel,callback)=>
{
    mongodb.getCollection("movies").insertOne({name: movieModel.name, genre: movieModel.genre, rating: movieModel.rating, language: movieModel.language})
    .then(()=>{
        return callback("success",null)
    },
    err=>{ console.log(err)
        return callback(null,err)})      
    
}

exports.getAllMovies=(callback)=>
{
    mongodb.getCollection("movies").find({}).toArray(function(err, result) {
        if (result){
            return callback(result,null)
        }else{
            return callback(null,err) 
        }
       
      }); 
    
}


exports.searchMovie=(movieName,callback)=>
{
    mongodb.getCollection("movies").findOne({name: movieName})
    .then(
        (movie)=>{ return callback(movie,null)},
        err=>{
            console.log(err)
            return callback(null,err)
        });
    
}

exports.getBestRatedMovies=(callback)=>
{
    var mysort = { rating: -1 };
    mongodb.getCollection("movies").find().sort(mysort).limit(3).toArray(function(err, result) {
        if (result){
            return callback(result,null)
        }else{
            return callback(null,err) 
        }
       
      }); 
    
}

exports.updateMovies=(model,callback)=>
{
    const filter = {_id: ObjectId(model.id)};


    const update = { $set: {achievements: model.achievements} };
    mongodb.getCollection("movies").findOneAndUpdate(filter, update)
    .then(()=>{ return callback("success",null)},
        err=>{
            console.log(err);
            return callback(null,err)
        });
    
}


exports.getMoviesWithAchievement=(callback)=>
{
    var query = { achievements: /^S/ };
    mongodb.getCollection("movies").find(query).toArray(function(err, result) {
        if (result){
            return callback(result,null)
        }else{
            return callback(null,err) 
        }
  });
    
}