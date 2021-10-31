module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name: {
            type: String,
            required: false
          },
          email: {
            type: String,
            required: true,
            unique: true,
          },
          password: {
            type: String,
            required: true,
            minlength: 6
          },
          roles: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "role"
            },
          tokens:[String]
        },
        { timestamps: true }
      ));
}