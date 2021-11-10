module.exports = mongoose => {
    const Order = mongoose.model(
      "orders",
      mongoose.Schema(
        {
          user_id: String,
          movie_id: String,
          poster_link: String,
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