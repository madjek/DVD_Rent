module.exports = mongoose => {
    const Order = mongoose.model(
      "orders",
      mongoose.Schema(
        {
          available: Boolean,
          user_id: String,
          movie_id: String,
          title: String,
          poster_path: String,
          order_date: {
            type: Date,
            default: Date.now
          },
          expiry_date: {
            type: Date,
            default: +new Date() + 7*24*60*60*1000}
        },
      )
    );
    
    return Order;
  };