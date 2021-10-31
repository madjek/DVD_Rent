module.exports = mongoose => {
    const Order = mongoose.model(
      "orders",
      mongoose.Schema(
        {
          user_id: Number,
          movie_id: Number,
          date: Date
        },
        { timestamps: true }
      )
    );
  
    return Order;
  };