var movieRepo=require("../repo/movieRepo")
var Movies=require("../model/moviemodel")
exports.addMovies=(req,res)=>
{
     var movieModel=new Movies(req.body.name,req.body.genre,req.body.rating,req.body.lang)
     movieRepo.addMovies(movieModel,function(data,err)
     {
         if(data)
         {
             return res.status(200).send("Movie has been added successfully")
         }else{
            return res.status(404).send("Some error occured")
         }
     })

}

exports.getAllMovies=(req,res)=>
{

     movieRepo.getAllMovies(function(data,err)
     {
         if(data)
         {
             return res.status(200).send(data)
         }else{
            return res.status(404).send("Some error occured")
         }
     })

}


exports.searchMovie=(req,res)=>
{
     var movieName=req.body.name;
     movieRepo.searchMovie(movieName,function(data,err)
     {
         if(data)
         {
             return res.status(200).send(data)
         }else{
            return res.status(404).send("Some error occured")
         }
     })

}

exports.getBestRatedMovies=(req,res)=>
{

     movieRepo.getBestRatedMovies(function(data,err)
     {
         if(data)
         {
             return res.status(200).send(data)
         }else{
            return res.status(404).send("Some error occured")
         }
     })

}
exports.updateMovies=(req,res)=>
{
     var movieModel=new Movies();
     movieModel.achievements=req.body.achievements;
     movieModel.id=req.body.id;
     movieRepo.updateMovies(movieModel,function(data,err)
     {
         if(data)
         {
             return res.status(200).send("Movie has been updated successfully")
         }else{
            return res.status(404).send("Some error occured")
         }
     })

}

exports.getMoviesWithAchievement=(req,res)=>
{

     movieRepo.getMoviesWithAchievement(function(data,err)
     {
         if(data)
         {
             return res.status(200).send(data)
         }else{
            return res.status(404).send("Some error occured")
         }
     })

}

