const Movies = require("../movies/movies.controller");
const { Router } = require("express");
const router = Router();

// obtener una sola peli
router.post("/movie", Movies.getMovie);
// obtener todas las pelis
router.get("/movies", Movies.getMovies);
// insertar peli
router.post("/addmovie", Movies.addMovies);

router.put("/uptademovies", Movies.uptadeMovies);

router.delete("/deletemovies", Movies.deleteMovies);

module.exports = router;
