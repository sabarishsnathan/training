var express = require('express');
var router = express.Router();
var movie=require("../controller/movieController")
router.post('/addMovie',movie.addMovies) 
router.post('/searchMovie',movie.searchMovie)
router.post('/updateMovie',movie.updateMovies)
router.get('/getAllMovies',movie.getAllMovies)
router.get('/getBestRatedMovies',movie.getBestRatedMovies)
router.get('/getMoviesWithAchievement',movie.getMoviesWithAchievement)

module.exports = router;