module.exports = mongoose => {
    const Movie = mongoose.model(
      "movies",
      mongoose.Schema(
        {
          title: String,
          genres: String,
          runtime: Number,
          overview: String,
          original_language: String,
          production_company: String,
          production_country: String,
          release_date: Date,
          vote_average: Number
        },
        { timestamps: true }
      )
    );
  
    return Movie;
  };