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
          production_company: Array,
          production_country: Array,
          release_date: Date,
          vote_average: Number,
          available: Boolean
        },
      )
    );
  
    return Movie;
  };