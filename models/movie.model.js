module.exports = mongoose => {
    const Movie = mongoose.model(
      "movies",
      mongoose.Schema(
        {
          title: String,
          genres: Array,
          runtime: Number,
          overview: String,
          original_language: String,
          release_date: Date,
          vote_average: Number,
          poster_path: String,
          backdrop_path: String,
          available: Boolean
        },
      )
    );
  
    return Movie;
  };